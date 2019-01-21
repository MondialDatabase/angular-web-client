#!/bin/sh

docker build --tag mondial-web-client .
docker run --rm --name mondial-web-client-server -p 4200:4200 -v "$(pwd)":/usr/src/app -v /usr/src/app/node_modules mondial-web-client run e2e -- --protractor-config=./e2e/protractor-ci.conf.js
