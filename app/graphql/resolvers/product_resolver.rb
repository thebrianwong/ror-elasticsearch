module Resolvers
  class ProductResolver < BaseResolver
    type Types::ProductType, null: false
    argument :name, String

    def resolve(name:)
      query = Product.search({search_value: name}).page(1)
      response = query.response["hits"]["hits"]
      products = response.map { |doc| doc._source}
      num_of_pages = query.records.total_pages
      current_page = query.records.current_page

      response
    end
  end
end
