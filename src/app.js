const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const createError = require('http-errors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const { errorHandler } = require('./utils/errorHandler');
const swaggerRouter = require('./swagger');
const config = require('./config/config');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: config.frontendUrl, // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use(swaggerRouter); // Add this line to include Swagger documentation

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
