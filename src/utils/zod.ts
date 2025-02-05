import { z } from 'zod';

export const ticketSchema = z.object({
  description: z.string().trim().min(1),
  equipment: z.string().trim().min(3),
  user_name: z.string().trim().min(1),
});
