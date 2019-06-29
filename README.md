# GCDB GraphQL API

This is a query API for the MySQL dumps of the GCDB as documented here: https://docs.comics.org/wiki/Main_Page#Database

The goal is to deploy dumps to AWS Serverless Aurora and have this API hosted on a lambda.

## Running

* `npm i && npm start`

## Database

A docker-compose is included for running a MySQL instance to import a dump.
