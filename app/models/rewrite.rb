# frozen_string_literal: true

class Rewrite < ApplicationRecord
  belongs_to :user
  belongs_to :song
  validates :title, presence: true
  # validates :rewritten_lyrics, presence: true

  def self.find_my_rewrites(user)
    rewrites = user.rewrites
    rewrites
  end

end
