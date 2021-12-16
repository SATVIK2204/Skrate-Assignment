require('express-async-errors');

const express = require('express');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Routes
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/usersRoutes');
const meetingsRoutes = require('./routes/meetingsRoutes')

//MISC
const connectDB = require('./db/connect');

// Error Handler
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Initialize the app
const app = express();

// Set Environment Variables
if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: './config/config.env',
  });
}

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Connect to Database
connectDB();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use(indexRoutes);
app.use('/users', usersRoutes);
app.use('/meetings', meetingsRoutes);

// Use Error Handler
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
