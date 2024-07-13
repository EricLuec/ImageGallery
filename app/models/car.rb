class Car < ApplicationRecord
    has_one_attached :image

  validates :brand, presence: true
  validates :model, presence: true
  validates :likes, presence: true
  validates :image, presence: { message: 'Image must be attached' }
  end
  