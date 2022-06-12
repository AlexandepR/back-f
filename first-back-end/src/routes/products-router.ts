import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";


export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString())
        res.send(foundProducts)
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.creareProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204);
            return;
        }
    }
    res.send(404)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = productsRepository.getProductByID(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})