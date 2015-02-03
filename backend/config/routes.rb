Rails.application.routes.draw do
  namespace :api do
    resources :stocks, only: [:index, :show, :create, :update]
  end
end
