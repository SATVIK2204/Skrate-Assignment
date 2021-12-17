

//MISC
require('express-async-errors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./db/connect');
const cors = require('cors');

// Routes
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/usersRoutes');
const meetingsRoutes = require('./routes/meetingsRoutes')

// Error Handler
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Swagger setup
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger-documentation.yaml')

//----------------------------------------------------------------------

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

// Initializing Cors
app.use(cors())

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use(indexRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))  // Routing to Swagger UI Documentaion
app.use('/users', usersRoutes);
app.use('/meetings', meetingsRoutes);

// Use Error Handler
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
