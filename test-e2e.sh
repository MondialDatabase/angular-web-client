#!/bin/sh

docker-compose run --rm web-client-dev-env run e2e -- --protractor-config=./e2e/protractor-ci.conf.js --configuration=docker
