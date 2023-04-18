import { prisma } from '@/config';

function getAllTicketsTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  getAllTicketsTypes,
};

export default ticketsRepository;
