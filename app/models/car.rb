class Car < ApplicationRecord
  has_many :likes, as: :record, dependent: :destroy
  has_one_attached :image

  after_initialize :set_default_likes, if: :new_record?

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

  private

  def set_default_likes
    self.likes ||= 0
  end
end
