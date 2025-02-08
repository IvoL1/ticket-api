import { Request, Response } from 'express';
import { findAll } from '../../services/ticketService';
import { ERROR_MESSAGES } from '../../utils/messagesError';

export const indexTickets = (req: Request, res: Response) => {
  const { status } = req.query;

  if (status && typeof status === 'string') {
    res.json(findAll(status));
    return;
  } else {
    res.json(findAll());
    return;
  }
};
