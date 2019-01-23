#!/bin/sh

docker-compose run --rm web-client-server run e2e -- --protractor-config=./e2e/protractor-ci.conf.js
