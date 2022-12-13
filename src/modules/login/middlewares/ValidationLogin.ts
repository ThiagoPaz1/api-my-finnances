import { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"

import { userService } from "../../user/services"

export class ValidationsLogin {
  public async validationFields(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body
    const user = await userService.findByUserEmail(email)
    
    if (!user) {
      return res.status(400).send("Dados incorretos")
    }
    
    const verifyPassword = await bcrypt.compare(password, user.password)
    
    if (!verifyPassword) {
      return res.status(400).send("Dados incorretos")
    }
    // @ts-ignore
    req.user = user
    next()
  } 
}

