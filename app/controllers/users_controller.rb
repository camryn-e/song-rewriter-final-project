# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :find_user, except: [:create]

  # signup
  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { error: 'Username and Password Cannot Be Blank' }, status: :unprocessable_entity
    end
  end

  # me
  def show
    render json: @user
  end

  # delete account
  def destroy
    @user.destroy
    session.delete :user_id
    render json: @user
  end

  private

  # strong params
  def user_params
    params.permit(:id, :name, :username, :password, :password_confirmation)
  end

  def find_user
    return render json: { error: 'You Are Not Logged In' }, status: :unauthorized unless session.include? :user_id
    @user = User.find_by(id: session[:user_id])
    @user
  end

end
