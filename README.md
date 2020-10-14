[Installation](#installation)

- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Note](#note)

# Installation

This repo uses `docker` and `docker-compose`. I have supplied a `Makefile` to make the installation easier.  Just run `make build && make run` this will build the individual containers, run `docker-compose build` and `docker-compose up`

Three containers will be spun up:
* A container for the frontend application
* A container for the backend application
* A MongoDB container

  All containers are tied together by a docker network



# Technologies Used
For this application I tried to use various technologies in order to demonstrate my grasp of more than the basics.  For that reason I have chosen:

* Docker
* NodeJS for the backend, written in Typescript
* JWT authorization
* Joi schema validation for route middleware
* React for the frontend in plain Javascript
* react-query for state management on the frontend

# Note

Due to time constraints I was not able to implement all the features I was planning. Some of the ideas were to:
* Allow for user registration/login, which is working on the backend, you can use `Postman` send a payload of `email` and `password` to `/users/signup` and `/users/signin`.  You receive a token in response
* Once a user was logged in they would then have been able to:
    * Create a "favorites" playlist
    * Create custom tags based on their selections
    * See their history and time spent each day on each station.  The backend for this is stubbed out with a `Stats` route, controller and service and is secured by an authorization middleware.
    * Send an email to share their playlists

In case there are issues with getting the containers to run you can run the following commands to create them manually:
* `cd server` and `docker build -t api-server .`
* `cd ../client` and `docker build -t tunein-client .`
* `cd ..` and `docker-compose up --build`