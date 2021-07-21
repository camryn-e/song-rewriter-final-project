class Song < ApplicationRecord
    has_many :rewrites
    has_many :users, through: :rewrites
    validates :title, presence: true, uniqueness: true
end
