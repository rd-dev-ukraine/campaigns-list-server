import { check } from "express-validator";
import { createCampaignRecord } from "../../services/campaignsAdmin";

export const createCampaignSchema = [check("title").isLength({ min: 1 })];

export async function createCampaign(req: any, res: any) {
  const { title } = req.body;

  const campaign = await createCampaignRecord(title);

  res.send(campaign);
}
