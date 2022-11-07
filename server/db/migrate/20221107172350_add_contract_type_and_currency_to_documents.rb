class AddContractTypeAndCurrencyToDocuments < ActiveRecord::Migration[6.1]
  def change
    add_reference :documents, :contract_type, index: true
    add_reference :documents, :currency, index: true
  end
end
