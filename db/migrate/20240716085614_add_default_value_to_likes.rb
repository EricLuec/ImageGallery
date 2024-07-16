class AddDefaultValueToLikes < ActiveRecord::Migration[7.1]
  def change
    change_column_default :cars, :likes, from: nil, to: 0
  end
end
