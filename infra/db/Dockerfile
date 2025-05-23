FROM postgres:15

WORKDIR /docker-entrypoint-initdb.d

COPY ./init-db.sh .

RUN chmod +x init-db.sh
