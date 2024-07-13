class Car < ApplicationRecord
    has_one_attached :image

  validates :brand, presence: true
  validates :model, presence: true
  validates :image, presence: { message: 'must be attached' }
  end
  