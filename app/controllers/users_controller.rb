class UsersController < ApplicationController

    def create #signup
        user = User.create(user_params)
        if user.id
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: user.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def show # me
        return render json: { error: "You Are Not Logged In" }, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, include: :rewrites
    end

    

    private

    def user_params
        params.require(:username, :password, :password_confirmation).permit(:id, :name)
    end

end
