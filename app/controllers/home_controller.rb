class HomeController < ApplicationController
  def index
    @cars = Car.all
    @car = Car.new
  end

  def collection
  end
  
end
