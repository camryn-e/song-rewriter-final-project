# frozen_string_literal: true

class Rewrite < ApplicationRecord
  belongs_to :user
  belongs_to :song
  validates :title, presence: true
  # validates :rewritten_lyrics, presence: true
end
