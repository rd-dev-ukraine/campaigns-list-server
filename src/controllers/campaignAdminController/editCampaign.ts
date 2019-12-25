import { check } from "express-validator";
import { editCampaignById } from "../../services/campaignsAdmin";

export const editCampaignControllerSchema = [
  check("title").isString(),
  check("max_count").isNumeric(),
  check("max_count_per_user").isNumeric()

];

export async function editCampaignController(req: any, res: any) {
  const { id } = req.params;

  try {
    const editResult = await editCampaignById(id, req.body);
    res.send({result: editResult});
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}
