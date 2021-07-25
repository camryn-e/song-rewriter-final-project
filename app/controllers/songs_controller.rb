class SongsController < ApplicationController

    def create
        song = Song.find_by(id: params[:id])
        if song
            render json: { error: "Song Already Exists" }, status: :unprocessable_entity
        else
            new_song = Song.create(song_params)
            if new_song.id
                render json: new_song, status: :created
            else
                render json: { 'Title Cannot Be Blank' }
            end
        end
    end


    def index
        songs = Songs.all
        render json: songs
    end

    private

    def song_params
        params.require(:title).permit(:id, :original_lyrics)
    end

end