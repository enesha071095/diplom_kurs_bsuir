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
        if d.save!
            render json: {
                status: {code: 200, message: 'Document created sucessfully.'}
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
