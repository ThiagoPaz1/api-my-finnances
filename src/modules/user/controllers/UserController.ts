import { Request, Response } from "express"
import bcrypt from "bcryptjs"

import { userService } from "../services"

export class UserController { 
  public async newUser(req: Request, res: Response) {
    const { name, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)

    try {
      await userService.createUser({
        name: name,
        email: email,
        password: encryptedPassword
      })

      return res.status(201).send('Criado com sucesso!')
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  public async updateDataUser(req: Request, res: Response) {
    
  }
} 