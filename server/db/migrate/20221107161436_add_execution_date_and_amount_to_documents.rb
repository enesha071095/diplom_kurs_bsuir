class AddExecutionDateAndAmountToDocuments < ActiveRecord::Migration[6.1]
  def change
    add_column :documents, :amount, :integer
    add_column :documents, :execution_deadline, :date
  end
end
