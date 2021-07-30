class UsersController < ApplicationController
    before_action :authorize, except: [:create]

    def create #signup
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "Username and Password Cannot Be Blank"}, status: :unprocessable_entity
        end
    end

    def show # me
        # return render json: { error: "You Are Not Logged In" }, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, include: :rewrites
    end

    def destroy # delete account
        user = User.find(session[:user_id])
        user.destroy
        session.delete :user_id
        render json: user
    end

    private

    def user_params # strong params
        params.permit(:id, :name, :username, :password, :password_confirmation)
    end

    def authorize
        return render json: { error: "You Are Not Logged In" }, status: :unauthorized unless session.include? :user_id
    end

end
