#!/bin/bash

mongoimport --host mongo --db tunein --collection users --type json --file ./mongo-seed/init.json --jsonArray
mongoimport --host mongo --db tunein --collection stats --type json --file ./mongo-seed/stats.json --jsonArray
