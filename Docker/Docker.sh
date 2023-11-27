1. Image Commands:
docker images: Lists all available images.

Copy code
docker images
docker pull <image>: Pulls an image from a registry.

Copy code
docker pull ubuntu
docker rmi <image>: Removes an image.

Copy code
docker rmi ubuntu
2. Container Lifecycle Commands:
docker ps: Lists running containers.

Copy code
docker ps
docker ps -a: Lists all containers (including stopped ones).

css
Copy code
docker ps -a
docker run <image>: Creates and starts a container from an image.

arduino
Copy code
docker run -it ubuntu
docker start <container>: Starts a stopped container.

sql
Copy code
docker start my_container
docker stop <container>: Stops a running container.

arduino
Copy code
docker stop my_container
docker rm <container>: Removes a container.

bash
Copy code
docker rm my_container
3. Container Interaction Commands:
docker exec -it <container> <command>: Executes a command in a running container.

bash
Copy code
docker exec -it my_container bash
docker logs <container>: Shows logs of a container.

Copy code
docker logs my_container
docker cp <container>:<source_path> <destination_path>: Copies files/folders between a container and host.

bash
Copy code
docker cp my_container:/app/logs ./logs
4. Network Commands:
docker network ls: Lists all networks.

bash
Copy code
docker network ls
docker network inspect <network>: Inspects a network.

Copy code
docker network inspect bridge
5. Docker Compose Commands:
docker-compose up: Starts services defined in a docker-compose.yml.

Copy code
docker-compose up
docker-compose down: Stops and removes containers defined in a docker-compose.yml.

Copy code
docker-compose down