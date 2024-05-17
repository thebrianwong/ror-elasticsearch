module Types
  class ProductType < Types::BaseObject
    field :edges, [Types::ProductEdgeType]
    field :current_page, Integer
    field :total_pages, Integer
  end
end
