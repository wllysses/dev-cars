import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'


export class CreateUserController {

    async postUser(req: Request, res: Response) {

        const { first_name, last_name, email, password, confirm_password } = req.body

        try {

            const emailAlReadtyExists = await prismaClient.user.findFirst({
                where: {
                    email
                }
            })

            if(emailAlReadtyExists) {
                return res.status(200).json({ message: 'E-mail já cadastrado! Tente novamente.' })
            }

            const user = await prismaClient.user.create({
                data: {
                    first_name,
                    last_name,
                    email,
                    password,
                    confirm_password
                }
            })

            return res.status(201).json({ success: true, message: 'Criado com sucesso!' })
        } catch(err) {
            return res.status(400).json({ success: false, message: 'Aconteceu um erro...', error: err })
        }
    }
}