Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3001'
      resource(
       '*',
       headers: :any,
       expose: ["Authorization"],
       methods: [:get, :patch, :put, :delete, :post, :options, :head],
       credentials: true
      )
    end
  end
  