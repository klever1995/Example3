# Example3: Simple JavaScript HTTP Server in Docker

A simple JavaScript program that greets the user with a message, dockerized for easy execution in any environment.

## Description

This is a basic JavaScript program that uses the built-in `http` module to create a simple HTTP server. When accessed at the root (`/`) route in a browser, it displays a welcome message in tomato-colored text, centered on the page.

## Technologies Used

- Node.js 14
- Docker

## Prerequisites

To run this project, you need to have Docker installed on your machine. If you don't have it, you can download it from [here](https://www.docker.com/products/docker-desktop).

## Instructions to Run the Project

1. **Clone this repository:**

   If you haven't cloned the repository yet, you can do so with the following command:

   ```bash
   git clone https://github.com/klever1995/Example3.git

2. **Pull the Docker image:** 
   Before running the container, pull the Docker image with the following command:

   ```bash
   docker pull ksrobalino/example_javascript:v1

3. **Run the Docker container:** 
   After pulling the image, run the container using this command:

   ```bash
   docker run -d -p 3000:3000 --name mi_contenedor ksrobalino/example_javascript:v1

4. **Access the application:** 
   Once the container is running, you can access the application by navigating to the following URL in your web browser:
   http://localhost:3000
   
