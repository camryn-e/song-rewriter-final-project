# frozen_string_literal: true

class Song < ApplicationRecord
  has_many :rewrites
  has_many :users, through: :rewrites
  validates :title, presence: true, uniqueness: true

  # use serializer
  # def self.find_my_songs_with_rewrites
  #   user = User.find_by(id: session[:user_id])
  #   songs = user.songs

  # end

end
