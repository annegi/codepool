#!/bin/bash

cmd="$1";

appcontainer=`docker ps | awk '{print $1}' | sed -n '2p'`

start(){
# Starts app on dev server
docker run -p 80:3000 -d codepool:1.0.0
}

stop(){
# Starts app on dev server
docker stop $appcontainer
docker rm $appcontainer
}


build(){
# Build Images 
docker rmi -f codepool:1.0.0
docker rmi -f node:boron
docker build -t codepool:1.0.0 ../.
}

deploy(){
# Bundles code to dev server
docker cp ../app.js $appcontainer:/usr/src/app 
docker cp ../public $appcontainer:/usr/src/app 
docker cp ../src $appcontainer:/usr/src/app 
}


# Status of Application
status(){
docker ps 
}

case "$cmd" in
start)
start ;;

deploy)
echo "Starting to deploy"
deploy ;;

stop)
stop ;;

status)
status ;;


restart)
stop
build
start
status ;;

*)
echo "Unkown command [$cmd]"
echo "Use one of the following [start,stop,deploy]" ;;

esac
