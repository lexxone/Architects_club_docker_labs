# Architects_club_docker_labs
Test web API and Angular UI applications for container training

1. Install Docker: https://docs.docker.com/docker-for-windows/install/
2. Switch to Windows container (see https://docs.docker.com/docker-for-windows/install/)
3. Once the installation of docker is over,check the installation by running following command "docker run hello-world " - if you see "Hello from Docker!" messages "Client: Docker Engine - Community..." - docker installed.
4. In cmd execute "docker pull microsoft/aspnet:4.7.2-windowsservercore-1803" -> required windows base image will be downloaded (~5gb).
5. In cmd execute "docker pull stefanscherer/node-windows:latest" -> required windows image with nodejs will be downloaded.
   Images:
      * microsoft/aspnet:4.7.2-windowsservercore-1803 
      * stefanscherer/node-windows:latest 
   will be required for the workshop.
6. Download testing apps: web and my-app.
    
