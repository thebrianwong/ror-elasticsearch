module Types
  class ProductQueryInput < Types::BaseInputObject
    description "Input for querying products"
    argument :search_value, String, required: true
    argument :page, Integer, required: true
    argument :is_active, Boolean, required: false, default_value: nil
    argument :created_from, GraphQL::Types::ISO8601Date, required: false, default_value: nil
    argument :created_to, GraphQL::Types::ISO8601Date, required: false, default_value: nil
    argument :in_stock_from, Integer, required: false, default_value: nil
    argument :in_stock_to, Integer, required: false, default_value: nil
    argument :price_from, Integer, required: false, default_value: nil
    argument :price_to, Integer, required: false, default_value: nil
    argument :sold_from, Integer, required: false, default_value: nil
    argument :sold_to, Integer, required: false, default_value: nil
  end
end
