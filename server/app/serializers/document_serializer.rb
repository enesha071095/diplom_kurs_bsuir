class DocumentSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :status, :deadline, :created_at


  attribute :created_at do |object|
    object.created_at.to_date
  end

  attribute :type do |object|
    object.type.name
  end

  attribute :departament do |object|
    object.departament.name
  end

  attribute :user_id do |object|
    object.user.id
  end

  attribute :amount, &:amount

  belongs_to :contract_type, meta: Proc.new{|v, params|
    {name: v.contract_type.name}
  }

  attribute :currency do |object|
    object.currency.name
  end

  attribute :user_fullname do |object|
    "#{object.user.second_name} #{object.user.first_name}"
  end

  attribute :file do |object|
    "#{Rails.application.routes.url_helpers.rails_blob_path(object.file) if object.file.attached?}"
  end


end
