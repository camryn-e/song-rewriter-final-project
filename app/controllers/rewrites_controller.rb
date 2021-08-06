# frozen_string_literal: true

class RewritesController < ApplicationController
  before_action :authorize, except: [:show, :index]
  # add rewrite
  def create
    user = User.find_by(id: session[:user_id])
    rewrite = user.rewrites.create(rewrite_params)
    # rewrite.user_id = user.id
    if rewrite
      render json: rewrite, status: :created
    else
      render json: { error: 'Must Have Title' }
    end
  end

  # display single rewrite
  def show
    rewrite = Rewrite.find_by(id: params[:id])
    render json: rewrite, include: :user
  end

  # display all rewrites for a given song
  def index
    song = Song.find_by(id: params[:song_id])
    render json: song, include: :rewrites
  end

  # edit rewrite
  def update
    user = User.find_by(id: session[:user_id])
    rewrite = user.rewrites.find_by(id: params[:id])

    if rewrite
      rewrite.update(rewritten_lyrics: params[:rewritten_lyrics])
      render json: rewrite
    else
      render json: { error: 'Not Your Rewrite' }
    end
  end

  # delete rewrite
  def destroy
    user = User.find_by(id: session[:user_id])
    rewrite = user.rewrites.find_by(id: params[:id])

    if rewrite
      rewrite.destroy
    else
      render json: { error: 'Not Your Rewrite' }
    end
  end

  def my_rewrites
    user = User.find_by(id: session[:user_id])
    rewrites = user.rewrites
    render json: rewrites
  end

  private

  def rewrite_params
    params.permit(:id, :title, :rewritten_lyrics, :song_id, :user_id)
  end

  def authorize
    return render json: { error: 'Not Logged In' }, status: :unauthorized unless session.include? :user_id
  end
end
