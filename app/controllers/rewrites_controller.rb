class RewritesController < ApplicationController
    before_action :authorize

    def create # add rewrite
        song = Song.find_by(id: params[:song_id])
        if song.id
            rewrite = Rewrite.create(rewrite_params)
            if rewrite
                render json: rewrite
            else
                render json: { error: "Must Have Title"}
            end
        else
            render json: { error: "Song Is Not In Database"}
        end
    end

    private

    def rewrite_params
        params.permit(:title, :rewritten_lyrics, :song_id, :user_id)
    end

    def authorize
        return render json: { error: "Not Logged In" }, status: :unauthorized unless session.include? :user_id
    end

end
