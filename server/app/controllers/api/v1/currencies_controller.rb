class Api::V1::CurrenciesController < ApplicationController
  def index
    render json: {
      data: CurrencySerializer.new(Currency.all).serializable_hash
    }, status: :ok
  end
end
