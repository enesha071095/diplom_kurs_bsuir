class Signature < ApplicationRecord

  belongs_to :document
  has_one :user, through: :document

  before_create do
    self.token = SecureRandom.hex(10)  if self.token.blank?
  end

end
