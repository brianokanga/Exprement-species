const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = require('./app');

// load env vars
dotenv.config({
  path: './config.env'
});

// Body parser
// app.use(express.json());

// Remote database connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'))
  .catch(err => {
    console.log('ERROR', err);
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

