const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//data
const projects = require('./projects.json');
const about = require('./about.json');

//dotevn
require('dotenv').config();
const {PORT, MONGODB_URL} = process.env;

//MONGO
// mongoose.connect(MONGODB_URL);
// const db = mongoose.connection;
// db.on('connected', () => console.log('mongo connected'));
// db.on('disconnected', () => console.log('mongo disconnected'));
// db.on('error', error => console.log('something is wrong', console.log(error)));

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routing
app.get('/', (req,res) => {
    res.send('hello world');
})

app.get('/projects', (req,res) => {
    res.json(projects);
})

app.get('/about', (req,res) => {
    res.json(about);
})


//Listen
app.listen(PORT, () => {
    console.log('express listening at port', PORT);
})