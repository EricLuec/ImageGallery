class RemoveLikesFromCars < ActiveRecord::Migration[7.1]
  def change
    remove_column :cars, :likes, :integer
  end
end
