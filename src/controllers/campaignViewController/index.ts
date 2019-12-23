import {Router} from 'express';
import { getCampaignList } from './getCampaignList';

export const campaignViewController = Router();

campaignViewController.get('/', getCampaignList);