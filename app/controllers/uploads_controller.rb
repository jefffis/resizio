class UploadsController < ApplicationController

	def new
		@upload = Upload.new
		@uploaded = Upload.last
	end
	
	def create

		image_type_allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/tiff']
		image_type = params[:upload][:image].content_type.chomp

		if !params[:upload][:image].nil? && image_type_allowed.include?(image_type)
			@upload = Upload.new(params[:upload])
			@upload.save
			redirect_to @upload
		elsif !image_type_allowed.include?(image_type)
			flash[:notice] = 'Hey friend, you gotta use an image.'
			redirect_to '/'
		else
			flash[:notice] = 'Hey friend, you forgot an image.'
			redirect_to '/'
		end
	end
	
	def show
		@upload = Upload.find(params[:id])
	end
	
	def thumbnail
	  @image = Upload.find(params[:id])
	  redirect_to @image.dynamic_attachment_url("#{params['width']}x#{params['height']}>")
	end

end