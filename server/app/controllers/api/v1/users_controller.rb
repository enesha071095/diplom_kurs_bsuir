class Api::V1::UsersController < ApplicationController
  
  def index_short
    render json: {
        data: UserShortSerializer.new(User.order('created_at DESC').reject{|c| c.id==1}).serializable_hash
    }, status: :ok
  end
  
  
  def index
    render json: {
        data: UserSerializer.new(User.order('created_at DESC').reject{|c| c.id==1}, include: [:documents]).serializable_hash
    }, status: :ok
  end

  def show
    u = User.find(params[:id])
    unless u.nil?
      render json: {
        data: UserSerializer.new(u, include: [:documents]).serializable_hash
       }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find a user by specified ID"
      }, status: :ok
    end

  end


end
