import { Request, Response } from 'express';
import { findAll } from '../../services/ticketService';
import { ERROR_MESSAGES } from '../../utils/messagesError';

export const indexTickets = (req: Request, res: Response) => {
  try {
    const tickets = findAll();
    if (tickets.length === 0) {
      res.status(404).json({ message: ERROR_MESSAGES.NOT_DATA });
      return;
    }
    res.json(tickets);
  } catch (err) {
    res
      .status(500)
      .json({ message: ERROR_MESSAGES.UNEXPECTED_ERROR, error: err });
  }
};
