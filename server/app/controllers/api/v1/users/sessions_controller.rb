# frozen_string_literal: true

class Api::V1::Users::SessionsController < Devise::SessionsController
  respond_to :json
  
  # before_action :configure_sign_in_params, only: [:create]
  # respond_to :json
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    user = User.find_by_email(params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      token = user.generate_jwt
      render json: 
      {
       token:  token.to_json,
       user_id: user.id,
       is_admin: user.is_chief
      }
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  # private

  # def respond_with(resource, _opts = {})
  #   render json: {
  #     status: {code: 200, message: 'Logged in sucessfully.', id: current_api_v1_user.id}
  #   }, status: :ok
  # end



end
