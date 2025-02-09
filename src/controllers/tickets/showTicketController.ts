import { Request, Response } from 'express';
import { findById } from '../../services/ticketService';
import { ERROR_MESSAGES } from '../../utils/messagesError';
export const showTickets = (req: Request, res: Response) => {
  const { id } = req.params;

  if (id && findById(id)) {
    res.status(200).json(findById(id));
  }
  if (!findById(id)) {
    res.status(404).json({ message: ERROR_MESSAGES.NOT_ID });
  }
};
