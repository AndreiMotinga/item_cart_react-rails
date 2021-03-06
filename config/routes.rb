Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'site#index'
end
