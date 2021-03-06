const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const path = require('path');


require('dotenv').config();

const app = express();
 
app.use(cors());


app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {

  console.log("MongoDB database connection established successfully");

})

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// --------------------------deployment------------------------------

// serve static client with backend server

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000; 

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);