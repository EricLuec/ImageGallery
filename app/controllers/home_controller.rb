class HomeController < ApplicationController
  def index
    @cars = Car.all
    @car = Car.new
  end

  def account
  end

  def collection
  end
  
end
