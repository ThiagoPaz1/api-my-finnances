import { Request, Response } from "express"
import bcrypt from "bcryptjs"

import { userService } from "../services"

export class UserController {
  public async getUser(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await userService.findByUserId(Number(id))
      
      return  res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email
      })
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  public async newUser(req: Request, res: Response) {
    const { name, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)

    try {
      await userService.createUser({
        name: name,
        email: email,
        password: encryptedPassword
      })

      return res.status(201).send("Criado com sucesso!")
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  public async updateDataUser(req: Request, res: Response) {
    const { id } = req.params
    const { name, email } = req.body

    try {
      await userService.updateUser({
        id: Number(id),
        name: name,
        email: email,
      })

      return res.status(201).send('Atualizado com sucesso!')
    } catch (error) {
      return res.status(500).send(error)
    }
  }
} 