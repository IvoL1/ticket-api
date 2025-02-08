import { z } from 'zod';

export const ticketSchema = z.object({
  description: z.string().trim().min(2),
  equipment: z.string().trim().min(3),
  user_name: z.string().trim().min(3),
});

export const statusSchema = z.enum(['close', 'open']);

export const updateTicketSchema = z.object({
  description: z.string().trim().min(2).optional(),
  equipment: z.string().trim().min(3).optional(),
});
