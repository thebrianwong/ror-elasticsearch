# frozen_string_literal: true

module Types
  class ProductNodeType < Types::BaseObject
    field :name, String, null: false
    field :price, Integer, null: false
    field :in_stock, Integer, null: false
    field :sold, Integer, null: false
    field :tags, [String], null: false
    field :description, String, null: false
    field :is_active, Boolean, null: false
    field :created, GraphQL::Types::ISO8601Date, null: false
  end
end
