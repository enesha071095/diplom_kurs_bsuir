class Api::V1::ContractTypesController < ApplicationController
  def index
    render json: {
      data: ContractTypeSerializer.new(ContractType.all).serializable_hash
    }, status: :ok
  end
end
