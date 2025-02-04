import { Request, Response, Router } from 'express';
import { validateTicket } from '../middlewares/authMiddleware';
import { indexTickets } from '../controllers/tickets/indexTicketController';

export const router = Router();

router.get('/tickets', validateTicket, indexTickets);
