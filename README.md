# Task Management API

A RESTful API for managing tasks, including creating, retrieving, and updating tasks. This API handles task data such as name, description, status, and timestamps, providing clear and intuitive paths for interacting with task resources.

## Features

- Create, retrieve, and update tasks.
- Handles task attributes such as name, description, and timestamps.

## Tech Stack

- **Node.js**: [JavaScript runtime for the backend](https://nodejs.org/).
- **Express.js**: [Web framework for building the API](https://expressjs.com/).
- **MongoDB**: [Database for storing task data](https://www.mongodb.com/).
- **Redis**: [In-memory data structure store, used as a database and cache](https://redis.io/).
- **Swagger**: [API documentation](https://swagger.io/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Redis](https://redis.io/) (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/himanshu064/node-auth.git
   cd node-auth
   go to task-crud-redis branch
   ```
2. Install dependencies
   ```bash
   npm install
   ```
4. **Set up Redis**
- Local Redis Instance
- Download and install Redis on your local machine 
- Start the Redis server
  ```bash
  redis-server
  ```