const express = require('express');
const { getTypes } = require('../controllers');

const typeRouter= express.Router();

typeRouter.get("/getTypes", getTypes);

module.exports = typeRouter;