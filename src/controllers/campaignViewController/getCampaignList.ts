import {
  getCampaignsList,
  setCampaignViewsAndGetList
} from "../../services/campaigns";
import { ICampaignModel } from "../../repositories/campaigns";

export async function getCampaignList(req: any, res: any) {
  const { userId } = req.query;
  let campaignList: ICampaignModel[] = [];
  if (userId) {
    campaignList = await setCampaignViewsAndGetList(userId);
  } else {
    campaignList = await getCampaignsList();
  }

  res.send(campaignList);
}
