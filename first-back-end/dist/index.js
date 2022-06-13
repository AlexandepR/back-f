"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.use(bodyParser.json())
const port = process.env.PORT || 3001;
let blablaMiddleware = (req, res, next) => {
    // @ts-ignore
    req.blabla = "hello";
    next();
};
let authGuardMiddleware = (req, res, next) => {
    if (req.query.token === "123") {
        next();
    }
    else {
        res.send(401);
    }
};
let requestCounter = 0;
const requestCounterMiddleware = (req, res, next) => {
    requestCounter++;
    next();
};
app.use(requestCounterMiddleware);
app.use(blablaMiddleware);
app.use(authGuardMiddleware);
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.get('/products', blablaMiddleware, (req, res) => {
    // @ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla + '!!!!' });
});
app.get('/users', (req, res) => {
    // @ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla + ' from users' });
});
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
