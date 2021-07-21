class User < ApplicationRecord
    has_secure_password
    has_many :rewrites, dependent: :destroy
    has_many :songs, through: :rewrites

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
