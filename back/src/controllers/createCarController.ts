import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'


export class CreateCarController {

    async postCar(req: Request, res: Response) {

        const { user_id, name, brand, price, img_url, color, year } = req.body

        try {
            const car = await prismaClient.car.create({
                data: {
                    user_id,
                    name,
                    brand,
                    price,
                    img_url,
                    color,
                    year
                }
            })

            return res.status(201).json({ success: true, message: 'Cadastrado com sucesso!', car })
        } catch(err) {
            return res.status(400).json({ success: false, message: 'Algo deu errado...', error: err })
        }
    }
}