Rails.application.routes.draw do
  devise_for :users

  resources :cars do
    resource :like, module: :cars

    member do
      post 'favorite'
      delete 'unfavorite'
    end

    collection do
      get 'search'
      get 'my_search'
      get 'liked_search'
      get 'favorite_search' 
      get 'collection', to: 'cars#collection'
      get 'my_cars', to: 'cars#my_cars'
      get 'liked_cars', to: 'cars#liked_cars'
      get 'favorite_cars', to: 'cars#favorite_cars'
      get 'models'
    end
  end

  root 'home#index'
  get 'collection', to: 'home#collection'
  get 'account', to: 'home#account'
  get 'about', to: 'home#about'

  get "up" => "rails/health#show", as: :rails_health_check
end
