Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/songs/:song_id/rewrites', to: 'rewrites#create'
  # get '/songs/:song_id/rewrites', to: "rewrites#index"
  get '/songs/:song_id/rewrites/:id', to: "rewrites#show"
  get '/songs', to: "songs#index"
  post '/songs', to: "songs#create"
  get '/songs/:id', to: "songs#show"

  # resources :songs, only: [:create, :show, :index] do
  #   resources :rewrites, only: [:show]
  # end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
