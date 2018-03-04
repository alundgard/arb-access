"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Controllers
const home_1 = require("./controllers/home");
//
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    // Setup Config
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
    }
    // Setup Routes
    routes() {
        const router = express.Router();
        router.get('/', home_1.default.get);
        router.post('/', home_1.default.post);
        this.app.use('/', router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map