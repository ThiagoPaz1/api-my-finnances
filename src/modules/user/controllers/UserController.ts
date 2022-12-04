import { Request, Response } from "express"

import { UserService } from "../services"

const userService = new UserService

export class UserController { 
  public async newUser(req: Request, res: Response) {
    const { name, email } = req.body
    
    try {
      await userService.createUser({
        name: name,
        email: email
      })

      return res.status(201).send('Criado com sucesso!')
    } catch (error) {
      return res.status(400).send(error)
    }
  }
}