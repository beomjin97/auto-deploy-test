FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATBASE=mydb

COPY create_db.sql /docker-entrypoint-initdb.d/

EXPOSE 3306