import { Request, Response, NextFunction } from 'express';
import { ticketSchema } from '../utils/zod';
import { z } from 'zod';

export const validateCreateTicket = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { description, equipment, user_name } = req.body;

  try {
    ticketSchema.parse({ description, equipment, user_name });
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send({
        error: 'Dados inválidos',
        details: error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }
  }
  next();
};
