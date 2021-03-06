const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const postRoute = require('./routes/postRoute')

//Middlewares
app.use(bodyParser.json());
 
//Routes
app.use(postRoute);

//Mongo connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 3000;

app.listen(PORT);