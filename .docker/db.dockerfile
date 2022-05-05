FROM postgres:alpine

COPY ./.docker/init-db.sql /docker-entrypoint-initdb.d/

WORKDIR /docker-entrypoint-initdb.d/