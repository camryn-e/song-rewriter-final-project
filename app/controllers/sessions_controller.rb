# frozen_string_literal: true

class SessionsController < ApplicationController
  # login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password]) && user&.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Incorrect Username or Password' }, status: :unauthorized
    end
  end

  # logout
  def destroy
    return render json: { error: 'Not Logged In' }, status: :unauthorized unless session.include? :user_id

    session.delete :user_id
    head :no_content
  end
end
