import { CampaignModel, ICampaignPayload } from "../../repositories/campaigns";

export async function getCampaignById(id: string) {
  const item = await CampaignModel.findById(id);

  return item;
}

export async function createCampaignRecord(title: string) {
  return new Promise((resolve, reject) => {
    const Model = new CampaignModel({
      title,
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
