import {
  getCampaignsList,
  setCampaignViews,
  getFilteredCampaignList
} from "../../services/campaigns";
import { ICampaignModel } from "../../repositories/campaigns";

export async function getCampaignList(req: any, res: any) {
  const { userId } = req.query;
  let campaignList: ICampaignModel[] = [];
  if (userId) {
    campaignList = await getFilteredCampaignList(userId);
    await setCampaignViews(userId);
  } else {
    campaignList = await getCampaignsList();
  }

  res.send(campaignList);
}
