class Cars::LikesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_car
    
    def update
        if @car.liked_by?(current_user)
            @car.unlike(current_user)
        else
            @car.like(current_user)
        end 
        redirect_to root_path
    end

    private

    def set_car
        @car = Car.find(params[:car_id])
    end 
end 