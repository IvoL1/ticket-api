import { Request, Response, Router } from 'express';
import { validateCreateTicket } from '../middlewares/validateCreateTicket';
import { storeTickets } from '../controllers/tickets/storeTicketController';
import { indexTickets } from '../controllers/tickets/indexTicketController';
import { validateTicketStatus } from '../middlewares/validateTicketStatus';
import { validateTicketUpdate } from '../middlewares/validateUpdateTicket';
import { updateTickets } from '../controllers/tickets/updateTicketController';

export const router = Router();

router.get('/tickets', validateTicketStatus, indexTickets); // Listar todos os tickets ou Filtrar por status
router.post('/tickets', validateCreateTicket, storeTickets); // Criar um novo ticket
router.put('/tickets/:id', validateTicketUpdate, updateTickets); // Atualizar um ticket específico
router.get('/tickets/:id'); // Buscar um ticket por ID
router.delete('/tickets/:id'); // Deletar um ticket específico
