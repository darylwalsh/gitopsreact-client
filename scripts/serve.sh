#!/usr/bin/env bash
# Set environment variables from .env and set NODE_ENV to test
source <(dotenv-export .env | sed 's/\\n/\n/g')
export NODE_ENV=test
#printenv
echo $WEB_SERVER_PORT_TEST
yarn run build
http-server dist/ -- -p $WEB_SERVER_PORT_TEST --cors
