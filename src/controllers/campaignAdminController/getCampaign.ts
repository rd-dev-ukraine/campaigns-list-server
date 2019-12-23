import { getCampaignById } from "../../services/campaignsAdmin";

export async function getCampaignController(req: any, res: any) {
  const { id } = req.params;

  try {
    const campaign = await getCampaignById(id);
    res.send({result: campaign});
  } catch (e) {
    res.send({result: null});
  }
}
