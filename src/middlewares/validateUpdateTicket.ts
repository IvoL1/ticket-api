import { Request, Response, NextFunction } from 'express';
import { updateTicketSchema } from '../utils/zod';

export const validateTicketUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = updateTicketSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error.errors });
    return;
  }
  next();
};
