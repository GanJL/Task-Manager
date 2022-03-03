# Task-Manager 

### Overview:

* A Task Manager App to replace the use of Windows Sticky Notes
* Check out the project:

    * [Project Site](https://task-manager-ganjl.herokuapp.com/)

    * [Complete Project Walkthrough](https://www.youtube.com/watch?v=rdK6Myjwhws&ab_channel=Gan)

    * Quick Walkthrough: 

    * ![Alt Text](https://github.com/GanJL/Task-Manager/blob/main/task-manager/client/src/icons/Task%20Manager%20-%20Google%20Chrome%202022-03-02%2023-03-39.gif?raw=true)

### Implemented with the following technologies:

* Front-end
    * [React](https://redux.js.org/introduction/getting-started) - Front-end framework
    * [Redux w/ hooks](https://redux.js.org/introduction/getting-started) - State Management Library
    * [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware which allows action creators to return a function
    * [React Router](https://reactrouter.com/) - Library for routing and navigation
    * [Bootstrap](https://getbootstrap.com/) - General styling

* Back-end
    * [Node.js](https://nodejs.org/en/) - Runtime environment for JavaScript
    * [Express.js](https://expressjs.com/) - Enhance Node.js features
    * [MongoDB](https://www.mongodb.com/) - NoSQL database to store data
    * [JSON Web Token](https://jwt.io/) - Open standard for securing information transmission
    * [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Hash and decrypt passwords
    * [Dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables

### Features:

* Authentication (Login/ Register)
* CRUD tasks into different task urgencies
* Descriptive color indicators for task status
* Modal popups to notify/perform actions: creating tasks, delete tasks and logout
* Loading spinners for fetching processes
* Proper responsive UI for all screens

### Instructions for testing:

1. Install node modules for api and client
```
    npm install
```
2. Run script
```
    npm run start
```
3. Create .env file
```
    PORT=5000
    ATLAS_URI= [Mongodb database URI]
    JWT_SECRET = [Password for JWT verification]
    NODE_ENV= [Environment type "production" or "development"]
```
### Future improvements:

* Profile update 
* Admin functions
* Adapt http-only json cookies to store JWT tokens/refresh tokens for added security  
