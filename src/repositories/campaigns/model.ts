import { Schema } from "mongoose";
import { DBInstance } from "../../db";
import { ICampaignModel } from "./api";

const { model } = DBInstance.getInstance();

const CompanySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  title: String,
  views_count: {
    type: Number,
    default: 0
  },
  max_count: {
    type: Number,
    default: 0
  },
  max_count_per_user: {
    type: Number,
    default: 0,
  },
});

export const CampaignModel = model<ICampaignModel>("campaign", CompanySchema, 'campaigns');
