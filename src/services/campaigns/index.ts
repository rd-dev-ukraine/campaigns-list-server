import { CampaignModel } from "../../repositories/campaigns";

export async function getCampaignsList() {
  return await CampaignModel.find({});
}