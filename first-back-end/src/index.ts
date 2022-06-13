import {productsRouter} from "./routes/products-router";
import express from 'express';
import bodyParser from "body-parser";

const app = express()

app.use(bodyParser())

const port = process.env.PORT || 3001

app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






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