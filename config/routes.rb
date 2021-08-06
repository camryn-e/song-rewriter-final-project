# frozen_string_literal: true

Rails.application.routes.draw do
  # posts
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  post '/songs/:song_id/rewrites', to: 'rewrites#create'
  post '/songs', to: 'songs#create'
  patch '/rewrites/:id', to: 'rewrites#update'

  # get
  get '/me', to: 'users#show'
  get '/songs/:song_id/rewrites/:id', to: 'rewrites#show'
  get '/songs/:song_id/rewrites', to: 'rewrites#index'
  get '/songs', to: 'songs#index'
  get '/rewrites/:id', to: 'rewrites#show'
  get '/rewrites', to: 'rewrites#my_rewrites'

  # delete
  delete '/logout', to: 'sessions#destroy'
  delete '/me', to: 'users#destroy'
  delete '/rewrites/:id', to: 'rewrites#destroy'

  # resources :songs do
  #   resources :rewrites
  # end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
