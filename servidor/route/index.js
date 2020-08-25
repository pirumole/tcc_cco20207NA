const { Router } = require('express');
const route = Router();

route.use('/', require('../api/index'));
route.use('/login', require('../api/Login'));
route.use('/forgotem', require('../api/Forgotem'));
route.use('/config', require('../api/Config'));

module.exports = route;