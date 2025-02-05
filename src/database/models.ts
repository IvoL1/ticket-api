export interface Ticket {
  id: string;
  equipment: string;
  description: string;
  user_name: string;
  status: 'open' | 'close';
}
