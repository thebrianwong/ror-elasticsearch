class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  # include Elasticsearch::Model
  # include Elasticsearch::Model::Callbacks
end
