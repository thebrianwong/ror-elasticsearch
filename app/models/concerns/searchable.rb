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

    def build_boolean_filter(type, value)
      if value == "true" || value == "false"
        {
          term: {
            type => value == "true" ? true : false
          }
        }
      else
        {}
      end
    end

    def build_range_filter(type, from_value, to_value)
      filter_range = {
        range: {
          type => {}
        }
      }
      unless from_value.nil?
        filter_range[:range][type][:gte] = from_value
        end
      unless to_value.nil?
        filter_range[:range][type][:lte] = to_value
      end
      filter_range
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
      filter_search_array.push query_builder.build_boolean_filter(:is_active, search_params[:is_active])
      filter_search_array.push query_builder.build_range_filter(:created, search_params[:created_from], search_params[:created_to])
      filter_search_array.push query_builder.build_range_filter(:in_stock, search_params[:in_stock_from], search_params[:in_stock_to])
      filter_search_array.push query_builder.build_range_filter(:price, search_params[:price_from], search_params[:price_to])
      filter_search_array.push query_builder.build_range_filter(:sold, search_params[:sold_from], search_params[:sold_to])

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
