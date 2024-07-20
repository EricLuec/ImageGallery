class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :favorite_cars, through: :favorites, source: :car
  has_many :likes
  has_many :cars
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
