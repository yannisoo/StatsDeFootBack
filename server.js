'use strict';

let express = require('express');
var cors = require('cors');
const  {  resolve  }  =  require('path'),
    {MongoClient} = require('mongodb'),
    bodyParser = require('body-parser');
global.fetch = require('node-fetch');

require('dotenv').config({  path:  resolve(__dirname,  './server/config/'  +  process.env.NODE_ENV.trim()  +  '/.env')  });
console.log('Server environment : ' + process.env.NODE_ENV.trim());


//set up variable for express and mongoose
let app = express(),
    port = 3000,
    mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    };
// mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    console.log('try the connection');
    mongoose.connect( process.env.DB_HOST.trim(), option);
  


//config cors
var corsOptions = {
    origin: ['https://statsdefootfront.herokuapp.com', 'https://statsdefoot.herokuapp.com'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: 'Content-Type,Authorization, x-xsrf-token',
    exposedHeaders: 'Content-Range,X-Content-Range, Accept-Ranges, Content-Encoding, Content-Length, Content-Range'
}

app.use(cors(corsOptions));




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Load models
let Test = require('./server/api/models/testModel');

//importing routes
let testRoutes = require('./server/api/routes/testRoutes');
testRoutes(app);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' is not implemented' })
});

app.listen(process.env.PORT || port);
console.log('StatsDeFoot : RESTful API server started on: ' + port);
