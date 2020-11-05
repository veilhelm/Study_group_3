require('dotenv').config();
const db = require('./src/config/dbConnection');
db();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const userRouter = require('./src/routes/users.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/users', userRouter);

module.exports = app;
