const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Importing all the routes
const authRouter = require('./routes/authRoutes');
const postsRouter = require('./routes/postsRoutes');

const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Connecting to the database
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.MONGO_CONNECT, connectionParams)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
    console.log(process.env.MONGO_CONNECT);
  });

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts', postsRouter);
app.all('*', (req, res, next) => {
  res.status(404).json({ status: 'Fail', message: 'No route like this found' });
});

// Server
const port = process.env.PORT || 3000;
server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
