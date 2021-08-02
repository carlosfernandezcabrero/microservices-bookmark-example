# microservices-bookmark-example

## Description

Javascript microsevices project with node js and docker. I use docker swarm to create the cluster for the microservices.

## Requirements

### .env file

The .env file must be in the root of the 'api' folder of each microservice. The .env file must contain a port variable to deploy Express server on a specific port.
Example:

``` text
PORT=3000
```

### mysqlConfig.js file

The mysqlConfig.js file should be in the folder **microservices-bookmark-example/*/api/src/shared/config** of the microservice.
Example of the file:

``` javascript
const MYSQL_CONFIG = {
  host          : 'localhost',
  user          : 'admin',
  password      : 'test',
  database      : 'develop',
  connectTimeout: 60000,
}

module.exports = MYSQL_CONFIG
```

### SQL File

The SQL file contains sql code to generate table. This file is in the static folder at the root of the repository.

### Dependencies

* Mysql
* Node Js 14
* Docker

## Build a cluster for microservice with Docker swarm

1. Create a microservice image with a Dockerfile, example:

    ``` shell
    sudo docker build -t micro-get-data .
    ```

2. Deploy images to the cluster:

    Before doing this you need init docker swarm and if you want to add workers to the cluster.

    Deploy command:

    ``` shell
    sudo docker stack deploy --compose-file docker-compose.yml stackdemo
    ```
