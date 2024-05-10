module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    mapping do
      # mapping definition goes here
      indexes :title, type: :text
    end

    def self.search(search_params)
      # build and run search
      search_multi_match = {
        multi_match: {
          query: search_params[:search_value],
          fields: ["name^2", :description, "tags^3"]
        }
      }
      must_search_array = [search_multi_match]

      filter_search_array = []

      # filter for is_active
      if search_params[:is_active] == "true" || search_params[:is_active] == "false"
        filter_is_active = {
          term: {
            is_active: search_params[:is_active] == "true" ? true : false
          }
        }
        filter_search_array.push filter_is_active
      end

      # filter for created date range
      filter_created_range = {
        range: {
          created: {}
        }
      }
      unless search_params[:created_from].nil?
        filter_created_range[:range][:created][:gte] = search_params[:created_from]
      end
      unless search_params[:created_to].nil?
        filter_created_range[:range][:created][:lte] = search_params[:created_to]
      end
      filter_search_array.push filter_created_range

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
