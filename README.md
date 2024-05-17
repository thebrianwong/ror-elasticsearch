# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

1. Copy `.env` and the Elasticsearch HTTPS certificate to the root directory.
2. Run `rails db:migrate`.
3. Run `yarn install`.
4. `cd` into `app/typescript` and run `npm install`.
5. Run `tsc`.
6. `cd` back to the root directory and run `bin/dev`.
