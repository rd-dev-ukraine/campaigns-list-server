import { check } from "express-validator";
import { createCampaignRecord } from "../../services/campaignsAdmin";

export const createCampaignSchema = [
  check("title").isLength({ min: 1 }),
  check("max_count").isNumeric(),
  check("max_count_per_user").isNumeric()
];

export async function createCampaign(req: any, res: any) {
  const campaign = await createCampaignRecord(req.body);

  res.send(campaign);
}
