class CarsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :search]
  before_action :set_car, only: %i[ show edit update destroy ]
  before_action :authorize_user!, only: [:edit, :update, :destroy]

  # GET /cars or /cars.json
  def index
    @cars = Car.order(created_at: :desc)
  end

  def my_cars
    @cars = Car.where(user_id: current_user.id).order(created_at: :desc)
  end

  def liked_cars
    @cars = Car.joins(:likes).where(likes: { user_id: current_user.id }).order(created_at: :desc)
  end

  # GET /cars/1 or /cars/1.json
  def show
  end

  # GET /cars/new
  def new
    @car = Car.new
  end

  # GET /cars/1/edit
  def edit
  end

  # POST /cars or /cars.json
  def create
    @car = current_user.cars.build(car_params)

    respond_to do |format|
      if @car.save
        format.html { redirect_to car_url(@car), notice: "Car was successfully created." }
        format.json { render :show, status: :created, location: @car }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @car.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cars/1 or /cars/1.json
  def update
    respond_to do |format|
      if @car.update(car_params)
        format.html { redirect_to car_url(@car), notice: "Car was successfully updated." }
        format.json { render :show, status: :ok, location: @car }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @car.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cars/1 or /cars/1.json
  def destroy
    @car = Car.find(params[:id])
    @car.destroy!

    redirect_to root_path
  end

  def search
    if params[:query].present?
      @cars = Car.where('brand LIKE ? OR model LIKE ?', "%#{params[:query]}%", "%#{params[:query]}%")
      .order(created_at: :desc)
    else
      @cars = Car.all.order(created_at: :desc)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_params
      params.require(:car).permit(:brand, :model, :likes_count)
    end

  private

  def car_params
    params.require(:car).permit(:brand, :model, :likes_count, :image)
  end

  def authorize_user!
    unless @car.user == current_user
      redirect_to root_path, alert: 'You are not authorized to perform this action.'
    end
  end

end
