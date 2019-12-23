import { Document } from "mongoose";

export interface ICampaignModel extends Document {
  _id: string;
  title: string;
  views_count: number;
  max_count: number;
  max_count_per_user: number;
}

export interface ICampaignPayload {
  title: string;
  views_count: number;
} 