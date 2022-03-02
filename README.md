# Task-Manager 

### Overview:

* A Task Manager App to replace the use of Windows Sticky Notes
* Built on popular MERN stack for scalability and functionality
* Check out the project:

    * [Project Site](https://task-manager-ganjl.herokuapp.com/)

    * [Complete Project Walkthrough](https://www.youtube.com/watch?v=rdK6Myjwhws&ab_channel=Gan)

    * Quick Walkthrough: 

    * ![Alt Text](https://github.com/GanJL/Task-Manager/blob/main/task-manager/client/src/icons/Task%20Manager%20-%20Google%20Chrome%202022-03-02%2023-03-39.gif?raw=true)

### Implemented with the following tools:

* MongoDB, ExpressJS, React, NodeJS
    * Frontend/backend development
* BcryptJS
    * Password Management
* JWT 
    * Authorization 
* React Redux 
    * Statement Management
* Bootstrap
    * Styling
* Heroku
    * Deployment

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
