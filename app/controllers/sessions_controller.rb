class SessionsController < ApplicationController

    def create #login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) && user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Incorrect Username or Password" }, status: :unauthorized
        end
    end

end
