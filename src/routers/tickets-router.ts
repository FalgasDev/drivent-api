import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getAllTicketsTypes, getUserTicket } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types', getAllTicketsTypes).get('/', getUserTicket);

export { ticketsRouter };
