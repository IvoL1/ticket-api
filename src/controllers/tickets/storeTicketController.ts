import { Request, Response } from 'express';
import { create } from '../../services/ticketService';
export const storeTickets = (req: Request, res: Response) => {
  const ticket = req.body;
  const result = create(ticket);
  res.status(201).json(result);
};
