Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get '/me', to: "users#show"

  resources :rewrites

  resources :songs, only: [:create, :show, :index] do
    resources :rewrites, only: [:show]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
