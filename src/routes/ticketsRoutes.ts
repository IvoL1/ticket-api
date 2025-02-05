import { Request, Response, Router } from 'express';
import { validateCreateTicket } from '../middlewares/authMiddleware';
import { storeTickets } from '../controllers/tickets/storeTicketController';

export const router = Router();

router.get('/tickets'); // Listar todos os tickets
router.post('/tickets', validateCreateTicket, storeTickets); // Criar um novo ticket
router.get('/tickets/:id'); // Buscar um ticket por ID
router.put('/tickets/:id'); // Atualizar um ticket específico
router.delete('/tickets/:id'); // Deletar um ticket específico
