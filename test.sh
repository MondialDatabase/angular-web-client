#!/bin/sh

docker-compose run --rm web-client-server run test -- --browsers=ChromeHeadlessCI
