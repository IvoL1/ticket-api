import { Request, Response, NextFunction } from 'express';
import { statusSchema } from '../utils/zod';

export const validateTicketStatus = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status } = req.query;

  if (status) {
    const result = statusSchema.safeParse(status);
    if (!result.success) {
      res.status(400).json('Status inválido');
      return;
    }
    next();
  }
  next();
};
