import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3001

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Lenina'}, {id: 2, value: 'Pushkina'}]

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(pr => pr.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})
app.post('/products', (req: Request, res: Response) => {
    const idRandom = Math.floor(Math.random() * (1000 - 1) + 1)
    const newProduct = {
        id: idRandom,
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})
app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
} )
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204);
            return;
        }
    }
    res.send(404)
})
app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
app.get('/addresses/', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
    res.send(addresses)
})

const videos = [
    {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
    {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
    {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
    {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
    {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello World????"?';
    res.send(helloMessage)
})
app.get('/videos', (req: Request, res: Response) => {
    res.send(videos)
})
app.get('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const video = videos.find(v => v.id === id)
    if (!video) {
        res.sendStatus(404)
    } else {
        // res.send(video)
        res.json(video)
    }
})
app.post('/videos', (req: Request, res: Response) => {
    const newVideo = {
        id: (+new Date()),
        title: req.body.title,
        author: 'I\'m',
    }
    videos.push(newVideo)
    res.send(newVideo)
})
app.delete('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const index = videos.findIndex(v => v.id === id)
    if (index === -1) {
        res.sendStatus(404)
    } else {
        videos.splice(index, 1)
        res.sendStatus(204)
    }
})
app.put('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const video = videos.find(v => v.id === id)
    if (!video) {
        res.sendStatus(404)
    } else {
        video.title = req.body.title
        res.sendStatus(204)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})