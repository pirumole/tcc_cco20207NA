const Config = require('../config/config');
const Api     = require('../api');
require('dotenv').config();

class App extends Config {
    server = null;

    constructor() {
        super();
    }

    requestMiddleware(request, response, next) {
        request._dirname_ = this._dirname_; 

        next();
    }

    async listen() {
        setInterval(() => {
            this.reset();
        }, this.CRYPTO_TIME_INTERVAL);

        this.middleware.use((rq, rs, n) => this.requestMiddleware(rq, rs, n));
        this.middleware.use(Api);
        this.server = this.protocol.createServer(this.middleware);
        this.server.listen({ port: 3000 }, () => {
            console.log('server on');
        });

    }
}

module.exports = App;