class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :quantity
end
