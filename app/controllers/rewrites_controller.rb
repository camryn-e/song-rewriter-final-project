class RewritesController < ApplicationController

    def create
        rewrite = Rewrite.create(rewrite_params)
        if rewrite
            render json: rewrite
        else
            render json: { error: "Must Have Title"}
        end
    end

    private

    def rewrite_params
        params.permit(:title, :rewritten_lyrics, :song_id, :user_id)
    end

end
