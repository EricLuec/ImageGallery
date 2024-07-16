Rails.application.routes.draw do
  devise_for :users
  resources :cars do
    resource :like, module: :cars
    collection do
      get 'search'
    end
  end
  # get 'home/index'
  root 'home#index'
  get 'collection', to: 'home#collection'
  get 'account', to: 'home#account'

  get "up" => "rails/health#show", as: :rails_health_check
end
