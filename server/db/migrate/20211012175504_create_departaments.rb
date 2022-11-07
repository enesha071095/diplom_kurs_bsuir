class CreateDepartaments < ActiveRecord::Migration[6.1]
  def change
    create_table :departaments do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
