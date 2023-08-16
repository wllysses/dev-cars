import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'


interface Car {
    user_id: string
}

export class UsersController {

    async getUsers(req: Request, res: Response) {

        try {
            const users = await prismaClient.user.findMany()


            const userCars: Car[] = await prismaClient.$queryRaw`SELECT * FROM cars INNER JOIN users ON cars.user_id = users.id`

            const userWithCars = users.map((user) => {

                const cars = userCars.filter((car: { user_id: string }) => car.user_id === user.id)

                return {
                    ...user,
                    cars: cars
                }
            })

            return res.status(200).json(userWithCars)
        } catch(err) {
            return res.status(400).json({ succecss: false, message: 'Algo deu errado...', error: err })
        }
    }
}