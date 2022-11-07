class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.belongs_to :user
      t.belongs_to :departament
      t.string :name
      t.boolean :status
      t.date :deadline

      t.timestamps
    end
  end
end
