import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prismaClient } from '../database/prismaClient'


export class AuthLoginController {

    async authUser(req: Request, res: Response) {

        const { email, password } = req.body

        try {
            const user = await prismaClient.user.findFirst({
                where: {
                    AND: [{ email }, { password }]
                }
            })

            if (user === null) {
                return res.status(200).json({ success: false, message: 'E-mail ou senha inválidos!' })
            } else {
                const token = jwt.sign({ email }, process.env.SECRET_KEY!)
                return res.status(200).json({
                    success: true,
                    message: 'Login realizado com sucesso!',
                    user: {
                        token,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        email: user.email,
                        createdAt: user.created_at,
                        id: user.id
                    }
                })
            }

        } catch (err) {
            return res.status(400).json({ success: false, message: 'Algo deu errado...', error: err })
        }
    }
}