import { Request, Response } from 'express';
import { update } from '../../services/ticketService';
export const updateTickets = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, equipment } = req.body;

  if (id) {
    const updateTicket = update(id, description, equipment);
    res.json(updateTicket);
    return;
  }
};
