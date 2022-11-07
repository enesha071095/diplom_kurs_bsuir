class CreateSignature < ActiveRecord::Migration[6.1]
  def change
    create_table :signatures do |t|

      t.belongs_to :user
      t.belongs_to :document

      t.string :token

      t.timestamps
    end
  end
end
