import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

export class LoginController {
  public async login(req: Request, res: Response) {
    // @ts-ignore
    const user = req.user
    
    try {
      const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, {
        expiresIn: "24h",
      })
      
      return res.status(200).json({ token: token })
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}