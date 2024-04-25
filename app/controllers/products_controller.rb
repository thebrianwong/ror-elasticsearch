class ProductsController < ApplicationController
  def index
    search_param = params[:product]

    unless search_param.nil?
      query = Product.search(search_param).page(params[:page])
      response = query.response["hits"]["hits"]
      @products = response.map { |doc| doc._source}
      @pages_num = query.records.total_pages
    end
  end
end
