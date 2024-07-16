class AddLikesCountToCars < ActiveRecord::Migration[7.1]
  def change
    add_column :cars, :likes_count, :integer, default: 0
  end
end
