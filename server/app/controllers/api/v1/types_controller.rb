class Api::V1::TypesController < ApplicationController
    def index
        render json: {
            data: TypeSerializer.new(Type.all).serializable_hash
        }, status: :ok
    end 
end
