class Api::V1::DepartamentsController < ApplicationController
    def index
        render json: {
            data: DepartamentSerializer.new(Departament.all).serializable_hash
        }, status: :ok
    end
end
