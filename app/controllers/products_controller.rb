class ProductsController < ApplicationController
  def index
    search_param = params[:product]

    unless search_param.nil?
      query = Product.search(search_param)
      response = query.response["hits"]["hits"]
      @products = response.map { |doc| doc._source}
    end
  end
end
