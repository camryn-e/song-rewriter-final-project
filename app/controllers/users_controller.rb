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

    private

    def user_params
        params.require(:username, :password, :password_confirmation).permit(:id, :name)
    end

end
