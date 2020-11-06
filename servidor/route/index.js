const { Router } = require('express');
const route = Router();

route.use('/', require('../api/index'));
route.use('/sync', require('../api/Sync'));
route.use('/login', require('../api/Login'));
route.use('/forgotem', require('../api/Forgotem'));
route.use('/config', require('../api/Config'));
route.use('/app', require('../api/App'));
route.use('/translate', require('../api/Translate'));
route.use('/interface', require('../api/Interface'))

module.exports = route;