class UpdateExistingCarsWithUserId < ActiveRecord::Migration[7.1]
  def up
    default_user = User.first || User.create!(email: 'mike.zogheib@outlook.com', password: '886644', password_confirmation: '886644')
    Car.update_all(user_id: default_user.id)
  end

  def down

  end
end
