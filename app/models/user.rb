class User < ApplicationRecord
    has_secure_password
    has_many :rewrites, dependent: :destroy
    has_many :songs, through: :rewrites
end
