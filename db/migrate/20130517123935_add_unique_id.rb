class AddUniqueId < ActiveRecord::Migration
  def up
  	add_column :uploads, :unique_id, :string
  end

  def down
  end
end
