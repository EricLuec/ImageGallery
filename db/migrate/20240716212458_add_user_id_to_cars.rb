class AddUserIdToCars < ActiveRecord::Migration[7.1]
  def change
    add_reference :cars, :user, foreign_key: true
  end
end
