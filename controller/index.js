const express = require('express');
const { apiConfig } = require('../constants');
const generalRouter = require('./test');

const { GENERAL_DETAILS } = apiConfig;

const router = express.Router();

router.use((req, res, next) => { next(); });

router.use(GENERAL_DETAILS.GENERAL_API, generalRouter);
module.exports = router;