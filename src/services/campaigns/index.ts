import { CampaignModel } from "../../repositories/campaigns";
import { DBInstance } from "../../db";

export async function setCampaignViewsAndGetList(userId: string) {
  const session = await DBInstance.getInstance().startSession();
  session.startTransaction();
  const availableCampaignsQuery = {
    $expr: {
      $and: [
        {
          $lt: [`$users.${userId}.views_count`, "$max_count_per_user"]
        },
        {
          $lt: ["$views_count", "$max_count"]
        }
      ]
    }
  };
  const campaignList = await CampaignModel.find(availableCampaignsQuery, null,{
    session
  });

  const updateQuery = {
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

  await CampaignModel.updateMany(updateQuery, upd, { session });
  await session.commitTransaction();
  return campaignList;
}

export async function getCampaignsList() {
  return await CampaignModel.find({});
}