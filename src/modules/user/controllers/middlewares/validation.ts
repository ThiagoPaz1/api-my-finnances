import { Request, Response } from "express"
import { validationResult, body } from 'express-validator'

export const validation = (req: Request, res: Response) => {
  const errors = validationResult(req)
  body(req.body.name).isEmail()
}