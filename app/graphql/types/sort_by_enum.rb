module Types
  class SortByEnum < Types::BaseEnum
    value "RELEVANCE", value: nil
    value "NAME", value: "name"
    value "IS_ACTIVE", value: "is_active"
    value "CREATED", value: "created"
    value "IN_STOCK", value: "in_stock"
    value "PRICE", value: "price"
    value "SOLD", value: "sold"
  end
end
