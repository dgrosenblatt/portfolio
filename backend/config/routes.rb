Rails.application.routes.draw do
  namespace :api do
    resources :stocks, only: [:index, :show]
  end
end
