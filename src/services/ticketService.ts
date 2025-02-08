import { dataBase } from '../database';
import { Ticket } from '../database/models';
import { generateUUID } from '../utils/uuid';

export const create = (ticket: Ticket) => {
  const newTicket: Ticket = {
    id: generateUUID(),
    description: ticket.description.trim(),
    equipment: ticket.equipment.trim(),
    user_name: ticket.user_name.trim(),
    status: 'open',
  };
  dataBase.push(newTicket);
  return newTicket;
};

export const findAll = (status?: string) => {
  if (status) {
    return dataBase.filter((ticket) => ticket.status === status);
  }
  return dataBase;
};

export const findById = () => {};

export const update = (
  id: string,
  equipment?: string,
  description?: string
) => {
  const ticket = dataBase.find((ticket) => ticket.id === id);

  if (!ticket) {
    return { error: 'Require ID for update ticket' };
  }

  if (equipment) {
    ticket.equipment = equipment;
  }
  if (description) {
    ticket.description = description;
  }
  return ticket;
};

export const remove = () => {};
