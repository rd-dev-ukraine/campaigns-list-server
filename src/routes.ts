import {Router} from 'express';
import { campaignViewController } from './controllers/campaignViewController';
import { campaignAdminRouter } from './controllers/campaignAdminController';

export const routes = Router();

routes.use('/campaign', campaignViewController);

routes.use('/admin/campaign', campaignAdminRouter);