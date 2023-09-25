import { NextFunction, Request, Response } from 'express'
import { UserValidator } from '../../helpers/auth.register.validator'

export class ValidateData {
  static validateData (req: Request, res: Response, next: NextFunction) {
    const ressult = UserValidator(req.body)
    if (!ressult.success) return res.status(400).json({ error: ressult.error.errors })
    req.body = ressult.data

    next()
  }
}
