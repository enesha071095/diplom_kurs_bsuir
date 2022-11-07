class Api::V1::PositionsController < ApplicationController
    def index
        render json: {
            data: PositionSerializer.new(Position.all).serializable_hash
        }, status: :ok
    end
end
