import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'


export class CarsController {

    async getCars(req: Request, res: Response) {

        try {
            const cars = await prismaClient.car.findMany()  

            return res.status(200).json(cars)
        } catch(err) {
            return res.status(400).json({ success: false, message: 'Algo deu errado...', error: err })
        }
    }
}