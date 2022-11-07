class AddPositionToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :position, index: true
    add_column :positions, :name, :string
  end
end
