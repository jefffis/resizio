class AddImageDimension < ActiveRecord::Migration
  def up
    add_column :uploads, :max_width, :integer
    add_column :uploads, :max_height, :integer
  end

  def down
  end
end
