class Api::V1::ProductsController < ApplicationController
  def index
    unless params[:search_value].nil?
      query = Product.search(params).page(params[:page])
      response = query.response["hits"]["hits"]
      products = response.map { |doc| doc._source}
      num_of_pages = query.records.total_pages
      current_page = query.records.current_page

      render :json => {:products => products, :numOfPages => num_of_pages, :currentPage => current_page}
    end
  end
end
