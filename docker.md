Docker

Docker is a containerization platform.

It packages an application along with everything it needs to run:

Source Code
Python
NodeJS
Libraries
Dependencies
Environment Variables
OS Packages
Runtime

into a single unit called a Container.

Instead of saying

"Install Python, PostgreSQL, Redis, NodeJS, pip packages..."

you simply say

"Run this Docker image."

Everything is already inside.

Why Docker Exists

Suppose you build a FastAPI project.

On your laptop

Ubuntu 26.04
Python 3.14
PostgreSQL 17
Redis 8
Node 22

Everything works.

You push it to GitHub.

Someone clones it.

He has

Windows
Python 3.10
Node 18
Postgres 15

Project crashes.

Another person

Mac
Python 3.12
No PostgreSQL

Project crashes.

Docker solves this.

Everyone runs the exact same environment.

Without Docker

Imagine deploying your Enterprise AI SOC manually.

You must install

Ubuntu

Python

Node

npm

PostgreSQL

Redis

Git

Docker (ironically)

Uvicorn

pip packages

React dependencies

Environment variables

Database

Create tables

Configure ports

Configure firewall

Run backend

Run frontend

One mistake

↓

Application doesn't start.

With Docker

Only

docker compose up

Everything starts automatically.

Real World

Instead of

Backend

Frontend

Database

Redis


being installed separately

Docker creates

Container

Backend

Container

Frontend

Container

Postgres

Container

Redis

Everything communicates together.

What is a Container?

Think of it as

Mini Computer

inside your computer.

Every container has

Operating System

Application

Libraries

Dependencies

Runtime

Example

Backend Container

Ubuntu

Python

FastAPI

Requirements.txt

Uvicorn

Frontend Container

Node

React

Vite

npm packages

Database Container

PostgreSQL

Database files

Configuration
Why Companies Love Docker

Because

Works on developer laptop

↓

Works on QA

↓

Works on Production

↓

Works on Cloud

Exactly same.

Your Enterprise AI SOC

You have

Frontend

Backend

PostgreSQL

Docker Compose starts all together.

docker compose up

It creates

soc-frontend

soc-backend

soc-postgres
Docker Image

Image is like

Class

Container is like

Object

Example

Python Image

↓

Run

↓

Python Container
Dockerfile

Dockerfile tells Docker

How to build an image.

Example

FROM python:3.14

WORKDIR /app

COPY .

RUN pip install

CMD uvicorn

Docker reads this

↓

Creates image

↓

Image becomes container.

docker-compose.yml

Runs multiple containers together.

Instead of

docker run

docker run

docker run

One file starts

Backend

Frontend

Database

Redis

Nginx

etc.

Why Compose?

Without compose

docker run postgres

docker run backend

docker run frontend

docker network

docker volume

Every time.

With compose

docker compose up

Done.

Images vs Containers

Image

Template

Container

Running Application

Example

python:3.14

is Image.

Running

docker run python

creates Container.

Docker Volumes

Containers can be deleted.

Database should not disappear.

Volume stores

Database

Logs

Files

outside container.

Docker Network

Containers communicate

Instead of

localhost

Backend connects

postgres:5432

because Docker provides internal DNS.

Why Build Images?

Instead of giving source code

Company gives

Image

Deploy directly.

Why DevOps Uses Docker

Because

CI/CD

↓

Build Image

↓

Test Image

↓

Push Image

↓

Deploy Image

↓

Rollback Image

Everything becomes automated.

Your Project Pipeline

Current

React

↓

FastAPI

↓

PostgreSQL

Docker

React Container

↓

FastAPI Container

↓

Postgres Container

Future

GitHub

↓

GitHub Actions

↓

Docker Build

↓

Docker Hub

↓

Kubernetes

↓

Nginx

↓

Production
Your Current Issue

Docker is trying to start PostgreSQL on

5432

But Ubuntu already has PostgreSQL running.

Either

Stop local PostgreSQL

sudo systemctl stop postgresql

or change Docker Compose to

ports:
  - "5433:5432"

Then your backend should use

5433

from the host (inside the Docker network it still uses postgres:5432).

Common Docker Commands
docker images

List images.

docker ps

Running containers.

docker ps -a

All containers.

docker build -t app .

Create image.

docker run image

Run image.

docker stop container

Stop container.

docker rm container

Delete container.

docker rmi image

Delete image.

docker logs container

Container logs.

docker exec -it container bash

Open terminal inside container.

docker compose up

Start complete application.

docker compose down

Stop everything.

docker compose build

Rebuild images.

docker compose restart

Restart services.

Interview Questions
1. What is Docker?

A platform that packages an application and all its dependencies into portable containers, ensuring consistent execution across environments.

2. Difference between Image and Container?

Image: Immutable template.

Container: Running instance of an image.

3. What is Dockerfile?

A text file containing instructions to build a Docker image.

4. What is Docker Compose?

A tool to define and run multi-container applications using a docker-compose.yml file.

5. Why use Docker?
Consistent environments
Faster deployment
Isolation
Portability
Simplified dependency management
Better CI/CD integration
6. What problem does Docker solve?

The classic "it works on my machine" problem by packaging the application with its runtime and dependencies.

7. What is a Volume?

Persistent storage that survives container recreation.

8. What is Docker Network?

An internal virtual network that allows containers to communicate securely by service name.

9. Why use Docker in DevOps?

Because it provides reproducible builds, consistent deployments, environment isolation, and integrates seamlessly with CI/CD and orchestration platforms like Kubernetes.

10. Explain your project's Docker setup.

"I containerized the React frontend, FastAPI backend, and PostgreSQL database. Each service has its own Dockerfile, and Docker Compose orchestrates them on a shared network with persistent storage for the database. This setup ensures that the application runs consistently across development and deployment environments."