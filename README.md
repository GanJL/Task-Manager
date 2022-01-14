# Task-Manager 

Check out the walkthrough of this project:

[Project Walkthrough](https://www.youtube.com/watch?v=rdK6Myjwhws&ab_channel=Gan)

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
* Implement external backend API with AWS Lambda and Serverless framework