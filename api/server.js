const express = require('express');
const { logger } = require('./middleware/middleware')
const userRouter = require('./users/users-router')

const server = express();
server.use(express.json()) // remember express by default cannot parse JSON in request bodies

server.use(logger) // global middlewares and the user's router need to be connected here

server.use('/api/users', userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
