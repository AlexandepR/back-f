import {Request, Response, Router} from "express";

const addresses = [{id: 1, value: 'Lenina'}, {id: 2, value: 'Pushkina'}]

export const addressesRouter = Router({})


addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
    res.send(addresses)
})
