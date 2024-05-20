module Resolvers
  class ProductResolver < BaseResolver
    type Types::ProductType, null: false
    argument :input, Types::ProductQueryInput, required: true

    def resolve(input:)
      query = Product.search(input).page(input.page)
      response = query.response["hits"]["hits"]
      products = response.map { |doc| {node: doc._source}}
      num_of_pages = query.records.total_pages
      current_page = query.records.current_page

      { edges: products , current_page: current_page, total_pages: num_of_pages}
    end
  end
end
