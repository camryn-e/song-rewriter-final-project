class RewritesController < ApplicationController
    before_action :authorize, except: [:show, :index]
    

    def create # add rewrite
        user = User.find_by(id: session[:user_id])
        rewrite = user.rewrites.create(rewrite_params)
        # rewrite.user_id = user.id
        if rewrite
            render json: rewrite, status: :created
        else
            render json: { error: "Must Have Title"}
        end
    end

    def show # display single rewrite
        rewrite = Rewrite.find_by(id: params[:id])
        render json: rewrite, include: :user
    end

    # def index
    #     song = Song.find_by(id: params[:song_id])
    #     rewrites = song.rewrites.all
    #     render json: rewrites, include: :users
    # end

    def destroy # delete rewrite
        user = User.find_by(id: session[:user_id])
        rewrite = user.rewrites.find_by(id: params[:id])

        if rewrite
            rewrite.destroy
        else
            render json: { error: "Not Your Rewrite" }
        end
    end

    private

    def rewrite_params
        params.permit(:id, :title, :rewritten_lyrics, :song_id, :user_id)
    end

    def authorize
        return render json: { error: "Not Logged In" }, status: :unauthorized unless session.include? :user_id
    end

end
