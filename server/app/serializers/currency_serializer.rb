class CurrencySerializer
  include JSONAPI::Serializer
  attributes :id, :name
end
