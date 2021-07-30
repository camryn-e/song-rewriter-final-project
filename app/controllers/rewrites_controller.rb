class RewritesController < ApplicationController
    before_action :authorize, only: [:create]
    

    def create # add rewrite
        user = User.find_by(id: session[:user_id])
        rewrite = user.rewrites.create(rewrite_params)
        if rewrite
            render json: rewrite, status: :created
        else
            render json: { error: "Must Have Title"}
        end
    end

    def show
        song = Song.find_by(id: params[:song_id])
        rewrite = song.rewrites.find_by(params[:id])
        render json: rewrite, include: :user
    end

    # def index
    #     song = Song.find_by(id: params[:song_id])
    #     rewrites = song.rewrites.all
    #     render json: rewrites
    # end

    private

    def rewrite_params
        params.permit(:id, :title, :rewritten_lyrics, :song_id, :user_id)
    end

    def authorize
        return render json: { error: "Not Logged In" }, status: :unauthorized unless session.include? :user_id
    end

end
