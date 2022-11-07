class AddCountToDoc < ActiveRecord::Migration[6.1]
  def change
    add_column :documents, :count, :integer
  end
end
