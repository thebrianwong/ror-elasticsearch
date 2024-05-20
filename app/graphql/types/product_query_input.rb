module Types
  class ProductQueryInput < Types::BaseInputObject
    description "Input for querying products"
    argument :search_value, String, required: true
    argument :page, Integer, required: true
  end
end
