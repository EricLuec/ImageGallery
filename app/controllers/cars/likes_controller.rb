class Cars::LikesController < ApplicationController
    include ActionView::RecordIdentifier
  
    before_action :authenticate_user!
    before_action :set_car
  
    def update
      if @car.liked_by?(current_user)
        @car.unlike(current_user)
      else
        @car.like(current_user)
      end 

      redirect_to request.referer || root_path
    end
    
  
    private
  
    def set_car
      @car = Car.find(params[:car_id])
    end
  end
  