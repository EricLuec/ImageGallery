class CreateFavorites < ActiveRecord::Migration[7.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :car, null: false, foreign_key: true

      t.timestamps
    end
    add_index :favorites, [:user_id, :car_id], unique: true
  end
end
