class User < ApplicationRecord
    has_secure_password
    has_many :rewrites
    has_many :songs, through: :rewrites
end
