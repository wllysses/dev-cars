import { Request, Response, NextFunction } from 'express'
import { prismaClient } from '../database/prismaClient'

export class CarsbyUserController {

   async controllerFn(req: Request, res: Response, next: NextFunction) {

    const { user_id } = req.body

    try {
        const cars = await prismaClient.car.findMany({
            where: {
                user_id
            }
        })

        return res.status(200).json(cars)
    } catch(err) {
        next(err)
    }
   }
}
