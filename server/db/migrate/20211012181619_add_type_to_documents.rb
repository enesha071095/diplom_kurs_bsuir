class AddTypeToDocuments < ActiveRecord::Migration[6.1]
  def change
    add_reference :documents, :type, index: true
  end
end
