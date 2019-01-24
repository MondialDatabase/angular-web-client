#!/bin/sh

docker-compose run --rm web-client-dev-env run test -- --browsers=ChromeHeadlessCI
