import { CampaignModel } from "../../repositories/campaigns";

export async function setCampaignViews(userId: string) {
  const query = {
    $expr: {
      $and: [
        { $gt: ["$max_count_per_user", `$users.${userId}.views_count`] },
        { $gt: ["$max_count", "$views_count"] }
      ]
    }
  };

  const upd = {
    $inc: {
      [`users.${userId}.views_count`]: 1,
      views_count: 1
    }
  };

  await CampaignModel.updateMany(query, upd);
}

export async function getCampaignsList() {
  return await CampaignModel.find({});
}


export async function getFilteredCampaignList(userId: string) {
  if(!userId) throw new Error('User id is required argument');
  const query = {
    $expr: {
      $and: [
        {
          $lt: [`$users.${userId}.views_count` , '$max_count_per_user']
        },
        {
          $lt: ['$views_count', '$max_count']
        }
      ]
    }
  }

  return await CampaignModel.find(query);
}