# frozen_string_literal: true

Rails.application.routes.draw do
  # posts
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  post '/songs/:song_id/rewrites', to: 'rewrites#create'
  post '/songs', to: 'songs#create'
  patch '/me/:id', to: 'rewrites#update'

  # get
  get '/me', to: 'users#show'
  get '/songs/:song_id/rewrites/:id', to: 'rewrites#show'
  get '/songs/:id/rewrites', to: 'songs#show'
  get '/songs', to: 'songs#index'
  get '/me/:id', to: 'rewrites#show'

  # delete
  delete '/logout', to: 'sessions#destroy'
  delete '/delete-account', to: 'users#destroy'
  delete '/me/:id', to: 'rewrites#destroy'

  # resources :songs do
  #   resources :rewrites
  # end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
