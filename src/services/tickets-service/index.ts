import { TicketsTypes } from '@/protocols';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllTicketsTypes(): Promise<TicketsTypes[]> {
  const ticketsTypes = await ticketsRepository.getAllTicketsTypes();
  return ticketsTypes;
}

const ticketsService = {
  getAllTicketsTypes,
};

export default ticketsService;
