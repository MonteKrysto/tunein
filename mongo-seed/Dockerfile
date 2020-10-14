FROM mongo:3.6.19-xenial

COPY init.json /init.json
CMD mongoimport --host 127.0.0.1 --port 27017 --db tunein --collection users --type json --file /init.json --jsonArray