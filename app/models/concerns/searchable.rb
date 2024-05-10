module Searchable
  extend ActiveSupport::Concern

  class QueryBuilder
    def build_search_match(search_value)
      search_multi_match = {
        multi_match: {
          query: search_value,
          fields: ["name^2", :description, "tags^3"]
        }
      }
      [search_multi_match]
    end

    def build_is_active_filter(is_active)
      if is_active == "true" || is_active == "false"
        {
          term: {
            is_active: is_active == "true" ? true : false
          }
        }
      else
        {}
      end
    end

    def build_created_range_filter(created_from, created_to)
      filter_created_range = {
        range: {
          created: {}
        }
      }
      unless created_from.nil?
        filter_created_range[:range][:created][:gte] = created_from
      end
      unless created_to.nil?
        filter_created_range[:range][:created][:lte] = created_to
      end
      filter_created_range
    end

    def build_in_stock_range_filter(in_stock_from, in_stock_to)
      filter_in_stock_range = {
        range: {
          in_stock: {}
        }
      }
      unless in_stock_from.nil?
        filter_in_stock_range[:range][:in_stock][:gte] = in_stock_from
      end
      unless in_stock_to.nil?
        filter_in_stock_range[:range][:in_stock][:lte] = in_stock_to
      end
      filter_in_stock_range
    end

    def build_price_range_filter(price_from, price_to)
      filter_price_range = {
        range: {
          price: {}
        }
      }
      unless price_from.nil?
        filter_price_range[:range][:price][:gte] = price_from
      end
      unless price_to.nil?
        filter_price_range[:range][:price][:lte] = price_to
      end
      filter_price_range
    end

    def build_sold_range_filter(sold_from, sold_to)
      filter_sold_range = {
        range: {
          sold: {}
        }
      }
      unless sold_from.nil?
        filter_sold_range[:range][:sold][:gte] = sold_from
      end
      unless sold_to.nil?
        filter_sold_range[:range][:sold][:lte] = sold_to
      end
      filter_sold_range
    end
  end

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    mapping do
      # mapping definition goes here
      indexes :title, type: :text
    end

    def self.search(search_params)
      # build and run search
      query_builder = QueryBuilder.new

      must_search_array = query_builder.build_search_match(search_params[:search_value])

      filter_search_array = []
      filter_search_array.push query_builder.build_is_active_filter(search_params[:is_active])
      filter_search_array.push query_builder.build_created_range_filter(search_params[:created_from], search_params[:created_to])
      filter_search_array.push query_builder.build_in_stock_range_filter(search_params[:in_stock_from], search_params[:in_stock_to])
      filter_search_array.push query_builder.build_price_range_filter(search_params[:price_from], search_params[:price_to])
      filter_search_array.push query_builder.build_sold_range_filter(search_params[:sold_from], search_params[:sold_to])

      query_params = {
        query: {
          bool: {
            must: must_search_array,
            filter: filter_search_array
          }
        }
      }

      self.__elasticsearch__.search(query_params)
    end
  end
end
