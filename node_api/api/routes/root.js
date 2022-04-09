const api = require('express').Router();
const wrapper = require('../lib/wrapper');
const rootController = require('../controller/rootController');

api.get('/', wrapper(rootController.welcome));

module.exports = api