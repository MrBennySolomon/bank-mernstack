import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';

import users from './routes/usersRoutes.js';
import errorHandler from './middleware/errorHandler.js';

import connectDB from './config/db.js';

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(cors());

// Body parser middleware
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Bank API'
  });
});

app.use('/api/v1/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));