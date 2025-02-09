import { z } from 'zod';

export const ticketSchema = z.object({
  description: z.string().trim().min(2).max(200),
  equipment: z.string().trim().min(3).max(100),
  user_name: z.string().trim().min(3).max(50),
});

export const statusSchema = z.enum(['close', 'open']);

export const updateTicketSchema = z.object({
  description: z.string().trim().min(20).max(200).optional(),
  equipment: z.string().trim().min(3).max(100).optional(),
});
