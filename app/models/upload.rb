require 'uri'
#require 'action_view/helpers/dynamic_form'
#require 'image_size'
#require 'actionview'
#require 'actionpack'
#include ActionView::Helpers::NumberHelper

class Upload < ActiveRecord::Base

  attr_accessible :image, :max_width, :max_height
  validates_attachment_presence :image
  
  has_attached_file :image, :styles => Proc.new { |image| image.instance.styles }, :convert_options => { :all => '-strip -colorspace RGB'}
  #validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/png', 'image/gif', 'image/pjpeg', 'image/x-png', 'image/jpeg2000', 'image/tiff']
  validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/png', 'image/gif', 'image/tiff']

  
  def dynamic_style_format_symbol
    URI.escape(@dynamic_style_format).to_sym
  end

  def styles
    unless @dynamic_style_format.blank?
      { dynamic_style_format_symbol => @dynamic_style_format }
    else
      {}
    end
  end

  def dynamic_attachment_url(format)
    @dynamic_style_format = format
    image.reprocess!(dynamic_style_format_symbol) unless image.exists?(dynamic_style_format_symbol)
    image.url(dynamic_style_format_symbol)
  end

  def resize_image(name)
    return File.open(name).size / 1000
  end

  def image_dimensions(name)
    size = ImageSize.new(name.read)
    puts "[#{size.w}x#{size.h}] #{file}"
  end

  def bytesToKb(bytes)
    return bytes / 1000
  end

end