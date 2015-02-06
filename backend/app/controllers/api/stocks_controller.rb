class Api::StocksController < ApplicationController
  def index
    render json: Stock.all
  end

  def show
    @stock = Stock.find(params[:id])
    render json: @stock
  end

  def create
    @stock = Stock.new(stock_params)
    @stock.save
    render json: @stock
  end

  def update
    @stock = Stock.find(params[:id])
    @stock.update_attributes(stock_params)
    render json: @stock
  end

  def destroy
    @stock = Stock.find(params[:id])
    @stock.destroy
    head :no_content
  end

  private
  def stock_params
    params.require(:stock).permit(:ticker, :quantity)
  end
end
