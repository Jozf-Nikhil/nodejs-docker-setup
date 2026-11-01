# Node.js 18 – Docker Setup

A basic Node.js server containerized using Docker with Node.js 18 Alpine as the base image.

This project demonstrates the fundamentals of Docker, including Docker images, containers, Dockerfiles, port mapping, and image sharing through Docker Hub.

## Technologies Used

- Node.js 18
- Docker
- Dockerfile
- Docker Hub

## Project Structure

```text
Docker-Setup/
│
├── node_modules/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## 1. Dockerfile

Create a file named `Dockerfile` in the project root.

```dockerfile
# 1. Use Node.js 18 as the base image
FROM node:18-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install production dependencies
RUN npm install --omit=dev

# 5. Copy application source code
COPY . .

# 6. Document the application port
EXPOSE 3000

# 7. Start the application
CMD ["node", "server.js"]
```

## 2. .dockerignore

Create a `.dockerignore` file to exclude unnecessary files from the Docker build context.

```dockerignore
node_modules
npm-debug.log
.env
.git
.gitignore
.dockerignore
```

**Why use .dockerignore?**

- Avoid copying local `node_modules`.
- Prevent environment variables and secrets from entering the image.
- Exclude Git history and unnecessary files.
- Reduce Docker build context size.

## 3. Build Docker Image

Open the terminal in the project root directory.

```bash
docker build -t node-api-image .
```

Check the created image:

```bash
docker images
```

## 4. Run Docker Container

Run the application inside a Docker container.

```bash
docker run -d --name node-api-container -p 3001:3000 node-api-image
```

**Port mapping:**

- Host port: `3001`
- Container port: `3000`

Access the application:

```text
http://localhost:3001
```

## 5. Check Docker Containers

View running containers:

```bash
docker ps
```

View all containers, including stopped containers:

```bash
docker ps -a
```

## 6. View Container Logs

```bash
docker logs node-api-container
```

Follow logs continuously:

```bash
docker logs -f node-api-container
```

## 7. Stop and Remove Container

Stop the running container:

```bash
docker stop node-api-container
```

Remove the container:

```bash
docker rm node-api-container
```

## 8. Remove Docker Image

```bash
docker rmi node-api-image
```

Note: Remove containers referencing the image before deleting the image.

## 9. Share Docker Image Using Docker Hub

Docker images can be shared with other developers through Docker Hub.

### Step 1: Login to Docker Hub

```bash
docker login
```

### Step 2: Tag the Image

Replace `YOUR_USERNAME` with your Docker Hub username.

```bash
docker tag node-api-image YOUR_USERNAME/node-api-image:latest
```

### Step 3: Push Image to Docker Hub

```bash
docker push YOUR_USERNAME/node-api-image:latest
```

### Step 4: Pull Image on Another Machine

```bash
docker pull YOUR_USERNAME/node-api-image:latest
```

### Step 5: Run the Container

```bash
docker run -d --name node-api-container -p 3001:3000 YOUR_USERNAME/node-api-image:latest
```

The other developer can now run the application without installing Node.js or having the original source code.

Note: The Docker Hub repository must be public or the user must have permission to access a private repository.

## 10. Important Docker Commands

| Command | Description |
|---|---|
| `docker images` | List Docker images |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker build` | Build a Docker image |
| `docker run` | Create and run a container |
| `docker stop` | Stop a container |
| `docker start` | Start an existing container |
| `docker rm` | Remove a container |
| `docker rmi` | Remove an image |
| `docker logs` | View container logs |
| `docker push` | Upload an image to Docker Hub |
| `docker pull` | Download an image from Docker Hub |
| `docker save` | Export an image to a TAR file |
| `docker load` | Import an image from a TAR file |

## Docker Workflow

```text
Node.js Application
        |
        v
    Dockerfile
        |
        v
   Docker Build
        |
        v
   Docker Image
        |
        v
  Docker Container
        |
        v
   Running Server
```

### Learning Objectives

- Understand Docker images and containers.
- Create a Dockerfile for a Node.js application.
- Build and run Docker images.
- Understand container port mapping.
- Use `.dockerignore` to exclude unnecessary files.
- Manage containers and images.
- Share Docker images using Docker Hub.

---

**Project:** Basic Node.js 18 Docker Setup

**Purpose:** Learning Docker fundamentals and preparing for containerizing full-stack applications.