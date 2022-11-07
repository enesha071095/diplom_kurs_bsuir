class User < ApplicationRecord

    include Devise::JWT::RevocationStrategies::JTIMatcher

    devise :database_authenticatable, :trackable , :validatable

    has_one_attached :avatar
    belongs_to :position
    has_many :documents

    validates :first_name, :second_name, :email, presence: true
    validates_associated :position
    validates_presence_of :position

    validates :phone_number, length: {minimum: 5, maximum: 20}, allow_blank: true


    def generate_jwt
      JWT.encode({id: id, exp: 60.days.from_now.to_i}, Rails.application.secrets.secret_key_base)
    end

    def working_time
      (((Date.today.year*12+Date.today.month) - (self.created_at.year*12+self.created_at.month))/12.0).round(1)
    end 
    
  end
