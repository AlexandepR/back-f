import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";

const app = express()
app.use(cors())
// app.use(bodyParser.json())
const port = process.env.PORT || 3001

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})