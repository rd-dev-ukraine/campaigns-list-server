import { Router } from "express";
import { getAdminCampaignList } from "./getAdminCampaignList";
import { createCampaign, createCampaignSchema } from "./createCampaign";
import { errorHandler } from "../../middlewares/errorHandler";
import { getCampaignController } from "./getCampaign";
import {
  editCampaignControllerSchema,
  editCampaignController
} from "./editCampaign";

export const campaignAdminRouter = Router();

campaignAdminRouter.get("/", getAdminCampaignList);
campaignAdminRouter.get("/:id", getCampaignController);
campaignAdminRouter.post(
  "/",
  createCampaignSchema,
  errorHandler,
  createCampaign
);

campaignAdminRouter.put(
  "/:id",
  editCampaignControllerSchema,
  errorHandler,
  editCampaignController
);
