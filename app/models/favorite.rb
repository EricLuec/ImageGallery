class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :user_id, uniqueness: { scope: :car_id, message: "You can only favorite a car once" }
end
