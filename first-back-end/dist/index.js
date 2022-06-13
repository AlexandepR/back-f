"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_router_1 = require("./routes/products-router");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.default)());
const port = process.env.PORT || 3001;
app.use('/products', products_router_1.productsRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// import express, {NextFunction, Request, Response} from 'express'
// import cors from 'cors'
// import bodyParser from "body-parser";
// import {productsRouter} from "./routes/products-router";
// import {addressesRouter} from "./routes/addresses-router";
//
// const app = express()
// app.use(cors())
// // app.use(bodyParser.json())
// const port = process.env.PORT || 3001
//
// let blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     // @ts-ignore
//     req.blabla = "hello"
//     next()
// };
// let authGuardMiddleware = (req: Request,res: Response, next: NextFunction) => {
//     if (req.query.token === "123") {
//         next()
//     } else {
//         res.send(401)
//     }
// }
//
// let requestCounter = 0
//
// const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     requestCounter++;
//     next()
// }
//
// app.use(requestCounterMiddleware)
// app.use(blablaMiddleware)
// app.use(authGuardMiddleware)
//
// const parserMiddleware = bodyParser({})
// app.use(parserMiddleware)
//
//
// app.get('/products', blablaMiddleware,(req: Request, res: Response) => {
//     // @ts-ignore
//     const blabla = req.blabla;
//     res.send({value: blabla + '!!!!' + requestCounter})
// })
//
// app.get('/users', (req: Request, res: Response) => {
//     // @ts-ignore
//     const blabla = req.blabla;
//     res.send({value: blabla + ' from users' + requestCounter})
// })
//
// app.use('/products', productsRouter)
// app.use('/addresses', addressesRouter)
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
