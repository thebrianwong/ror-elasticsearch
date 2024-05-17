module Resolvers
  class ProductResolver < BaseResolver
    type [Types::ProductType], null: false
    argument :name, String, required: true

    def resolve(name: "bread")
      query = Product.search({search_value: name}).page(1)
      response = query.response["hits"]["hits"]
      products = response.map { |doc| doc._source}
      num_of_pages = query.records.total_pages
      current_page = query.records.current_page

      products
    end
  end
end
