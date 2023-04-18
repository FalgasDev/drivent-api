import { prisma } from '@/config';

function getAllTicketsTypes() {
  return prisma.ticketType.findMany();
}

function getUserTicketById(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    },
  });
}

const ticketsRepository = {
  getAllTicketsTypes,
  getUserTicketById,
};

export default ticketsRepository;
