Rails.application.config.to_prepare do
  Product.__elasticsearch__.client = Elasticsearch::Client.new(
    host: "https://#{ENV["ELASTICSEARCH_USERNAME"]}:#{ENV["ELASTICSEARCH_PASSWORD"]}@#{ENV["ELASTICSEARCH_URL"]}:#{ENV["ELASTICSEARCH_PORT"]}",
    transport_options: {
      ssl: {
        ca_file: ENV["ELASTICSEARCH_CERT_PATH"]
      }
    }
  )

  Product.connection
end
