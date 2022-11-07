class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :is_chief, :first_name, :second_name, :phone_number,
              :created_at, :last_sign_in_at, :sign_in_count

  attribute :position do |object|
    object.position.name
  end

  has_many :documents

  attribute :avatar do |object|
     "#{Rails.application.routes.url_helpers.rails_blob_path(object.avatar) if object.avatar.attached?}"
  end

  attribute :working_time, &:working_time
  
end
