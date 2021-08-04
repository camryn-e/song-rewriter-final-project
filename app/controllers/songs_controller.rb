# frozen_string_literal: true

class SongsController < ApplicationController
  before_action :authorize, only: [:create]

  def create
    song = Song.find_by(title: params[:title])
    if song
      render json: { error: 'Song Already Exists' }, status: :unprocessable_entity
    else
      new_song = Song.create(song_params)
      if new_song.id
        url = new_song.song_url
        video_id = url[-11, 11]
        new_song.update(song_url: video_id)
        render json: new_song, status: :created
      else
        render json: { error: 'Title Cannot Be Blank' }
      end
    end
  end

  def index
    songs = Song.all
    render json: songs
  end

  private

  def song_params
    params.permit(:id, :title, :original_lyrics, :song_url)
  end

  def authorize
    return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
  end
end
