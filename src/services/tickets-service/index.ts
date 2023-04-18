import { notFoundError } from '@/errors';
import { TicketsTypes } from '@/protocols';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllTicketsTypes(): Promise<TicketsTypes[]> {
  const ticketsTypes = await ticketsRepository.getAllTicketsTypes();
  return ticketsTypes;
}

async function getUserTicket(userId: number) {
  const user = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!user) throw notFoundError();

  const ticket = await ticketsRepository.getUserTicketById(user.id);

  if (!ticket) throw notFoundError();

  return ticket;
}

const ticketsService = {
  getAllTicketsTypes,
  getUserTicket,
};

export default ticketsService;
