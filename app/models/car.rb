class Car < ApplicationRecord
  has_many :likes, as: :record
  has_one_attached :image

  def liked_by?(user)
    likes.where(user: user).any?
  end

  def like(user)
    likes.where(user: user).first_or_create
  end

  def unlike(user)
    likes.where(user: user).destroy_all
  end

  validates :brand, presence: true
  validates :model, presence: true
  validates :image, presence: { message: 'must be attached' }

end
