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

export const findAll = () => {
  return dataBase;
};

export const findById = () => {};

export const update = () => {};

export const remove = () => {};
