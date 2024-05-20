module Resolvers
  class ProductResolver < BaseResolver
    type Types::ProductType, null: false
    argument :name, String, required: true
    argument :page, Integer, required: true

    def resolve(name: , page: )
      query = Product.search({search_value: name}).page(page)
      response = query.response["hits"]["hits"]
      products = response.map { |doc| {node: doc._source}}
      num_of_pages = query.records.total_pages
      current_page = query.records.current_page

      { edges: products , current_page: current_page, total_pages: num_of_pages}
    end
  end
end
