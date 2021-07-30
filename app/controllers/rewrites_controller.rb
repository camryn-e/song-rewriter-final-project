class RewritesController < ApplicationController
    before_action :authorize

    def create # add rewrite
        user = User.find_by(id: session[:user_id])
        rewrite = user.rewrites.create(rewrite_params)
        if rewrite
            render json: rewrite, status: :created
        else
            render json: { error: "Must Have Title"}
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
