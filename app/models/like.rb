class Like < ApplicationRecord
  belongs_to :user
  belongs_to :record, polymorphic: true, counter_cache: :likes

  validates :user_id, uniqueness: { scope: :record_id }
end
