import { Request, Response, NextFunction } from "express"

import { userService } from '../../services'

export class Validations {
  public async validationFields(req: Request, res: Response, next: NextFunction) {
    const { name, email } = req.body
    const validEmail = /\S+@\S+\.\S+/
    const checkValuesInDb = await userService.findByUserEmail(email)
  
    if (checkValuesInDb) {
      return res.status(400).send('Email já cadastrados')
    } 
  
    if (!validEmail.test(email)) return res.status(400).send('Email inválido')
  
    if (name.length < 3) return res.status(400).send('Nome tem que ter no mínimo 3 caracteres')
  
    next()
  }

  public async validationId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    const checkId = await userService.findByUserId(Number(id)) 
    console.log(checkId)
    if (!checkId) {
      return res.status(400).send("Id de usuário não encontrado")
    }

    next()
  }
}