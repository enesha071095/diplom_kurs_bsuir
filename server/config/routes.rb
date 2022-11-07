Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show],  defaults: { format: :json } do
        collection do
          get 'index_short'
        end
      end


      devise_for :users, controllers: {
            sessions: 'api/v1/users/sessions'
          },  defaults: { format: :json }

      resources :documents, only: [:index, :create, :update, :destroy],  defaults: { format: :json }

      resources :departaments, only: [:index]  ,  defaults: { format: :json }
      resources :positions, only: [:index] ,  defaults: { format: :json }
      resources :types, only: [:index] ,  defaults: { format: :json }
      resources :contract_types, only: [:index] ,  defaults: { format: :json }
      resources :currencies, only: [:index] ,  defaults: { format: :json }
    end
  end

    get '*path', to: redirect('/'), constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }


end
