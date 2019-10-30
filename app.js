const express = require('express');
const cors = require('cors');
const { apiConfig } = require('./constants');
const { HttpUtil } = require('./utils');
const controllers = require('./controller');

const app = express();
// cors setup
app.use(cors());
app.use(express.json());

// Settings the routes
app.use(apiConfig.ROOT_URL, controllers);

// To handle all unhandled Exceptions
app.use((err, req, res, next) => {
  if (err instanceof Array) {
    console.error('App BadRequest', err);
    res.json(HttpUtil.getBadRequest(err));
  }
  else if (err.name === 'ValidationError') {
    err.message = err.details[0].message;
    res.json(
      HttpUtil.getBadRequest([err.code, err.message.replace(/['"]+/g, '')])
    );
  }
  else {
    console.error('App Exception', err);
    res.json(HttpUtil.getException([err.code, err.message]));
  }
});
module.exports = app;

