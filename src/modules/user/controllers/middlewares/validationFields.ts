import { Request, Response, NextFunction } from "express"

import { userService } from '../../services'

export const validationFields = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body
  const validEmail = /\S+@\S+\.\S+/
  const checkValuesInDb = await userService.findByUserEmail(email)

  if (checkValuesInDb.email === email || checkValuesInDb.email === name) {
    return res.status(400).send('Nome ou email já cadastrados')
  } 

  if (name.length < 3) return res.status(400).send('Nome tem que ter no mínimo 3 caracteres')

  if (!validEmail.test(email)) return res.status(400).send('Email inválido')

  next()
}