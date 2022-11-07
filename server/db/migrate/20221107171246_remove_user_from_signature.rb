class RemoveUserFromSignature < ActiveRecord::Migration[6.1]
  def change
    remove_reference :signatures, :user, index: true
  end
end
