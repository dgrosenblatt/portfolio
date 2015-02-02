class Api::StocksController < ApplicationController
  def index
    render json: Stock.all
  end

  def show
    @stock = Stock.find(params[:id])
    render json: @stock
  end
end
