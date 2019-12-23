import { getCampaignsList } from "../../services/campaigns";

export async function getCampaignList(req: any, res: any) {
  const campaignsList = await getCampaignsList();

  res.send(campaignsList);
}
