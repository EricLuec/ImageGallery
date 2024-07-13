Rails.application.routes.draw do
  resources :cars
  # get 'home/index'
  root 'home#index'
  get 'collection', to: 'home#collection'

  get "up" => "rails/health#show", as: :rails_health_check
end
