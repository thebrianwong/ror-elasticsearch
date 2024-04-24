class ProductsController < ApplicationController
  def index
    query = Product.search("wine")
    response = query.response["hits"]["hits"]
    @products = response.map { |doc| doc._source}
  end
end
