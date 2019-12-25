import { CampaignModel, ICampaignPayload } from "../../repositories/campaigns";

export async function getCampaignById(id: string) {
  const item = await CampaignModel.findById(id);

  return item;
}

interface CampaignPayload {
  title: string;
  max_count: number;
  max_count_per_user: number;
}

export async function createCampaignRecord(payload: CampaignPayload) {
  const {
    title,
    max_count,
    max_count_per_user
  } = payload;

  return new Promise((resolve, reject) => {
    const Model = new CampaignModel({
      title,
      max_count,
      max_count_per_user
    });

    Model.save((err, record) => {
      if (err) return reject(err);
      resolve(record);
    });
  });
}

export async function editCampaignById(
  id: string,
  payload: Partial<ICampaignPayload>
) {
  const {title, views_count} = payload;
  return await CampaignModel.findByIdAndUpdate(id, {title, views_count},{new: true});
}
