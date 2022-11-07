class Departament < ApplicationRecord

    has_many :documents
    validates :name, presence: true
end