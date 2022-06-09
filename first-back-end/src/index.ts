import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3001


const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{value: 'Lenina'}, {value: 'pushkina'}]

app.get('/products',(req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:productTitle',(req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle);
    res.send(product)
    if (!product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
app.get('/addresses', (req: Request, res: Response) => {
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
app.post('/videos', (req:Request, res:Response) => {
    const newVideo = {
        id: (+new Date()),
        title: req.body.title,
        author: 'I\'m',
    }
    videos.push(newVideo)
    res.send(newVideo)
})
app.delete('/videos/:videoId', (req:Request, res:Response) => {
    const id = +req.params.videoId;
    const index = videos.findIndex(v => v.id === id)
    if (index === -1) {
        res.sendStatus(404)
    } else {
        videos.splice(index, 1)
        res.sendStatus(204)
    }
})
app.put('/videos/:videoId', (req:Request, res:Response) => {
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