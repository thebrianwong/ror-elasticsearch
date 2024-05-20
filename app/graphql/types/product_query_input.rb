module Types
  class ProductQueryInput < Types::BaseInputObject
    description "Input for querying products"
    argument :name, String, required: true
    argument :page, Integer, required: true
  end
end
