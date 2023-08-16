import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'


export class SingleCarController {

    async getSingleCar(req: Request, res: Response) {

        const { id } = req.params

        try {
            const car = await prismaClient.car.findFirst({
                where: {
                    id
                }
            })

            if(car === null) {
                return res.status(200).json({ message: 'Carro não encontrado!' })
            }

            return res.status(200).json(car)
        } catch(err) {
            return res.status(400).json({ success: false, message: 'Algo deu errado...', error: err })
        }
    }
}