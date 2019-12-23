import { getCampaignsList } from "../../services/campaigns";

export async function getAdminCampaignList(req: any, res: any) {
    const list = await getCampaignsList();

    res.send(list);
}