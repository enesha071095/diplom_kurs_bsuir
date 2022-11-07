class Api::V1::DocumentsController < ApplicationController

    def index
        if(params[:user_id])
            d = Document.where(user_id: params[:user_id].to_i)
            render json:
              {
               data:  DocumentSerializer.new(d).serializable_hash
              }, status: :ok
          else
            render json:
              {
               data:  DocumentSerializer.new(Document.order('created_at DESC')).serializable_hash
              }, status: :ok
          end
    end

    def create
        d = Document.new
        d.name=params[:name]
        d.user_id = params[:user_id]
        d.type_id = params[:type_id]
        d.departament_id = params[:departament_id]
        d.status = false
        d.count = params[:count]
        d.deadline = Date.parse(params[:deadline])
        d.execution_deadline = Date.parse(params[:exec_date])
        d.amount = params[:amount]
        d.currency_id = params[:currency_id]
        d.contract_type_id = params[:contract_type_id]

        if d.save!
            render json:
                     {
                       data:  DocumentSerializer.new(Document.last).serializable_hash
                     }, status: :ok
        else
            render json: {
                status: {code: 500, message: 'Can\'t create Document.'}
              }, status: 500
        end



    end


    def update

        if Document.find(params[:id]).update(status: params[:status].to_i)

            render json: {
                status: {code: 200, message: 'Document updated sucessfully.'}
            }, status: :ok
        else
            render json: {
                status: {code: 500, message: 'Can\'t update Document.'}
              }, status: 500
        end
    end

    def destroy
        Document.find(params[:document][:id]).destroy
        render json: {
                status: {code: 200, message: 'Document deleted sucessfully.'}
            }, status: :ok
    end
end
