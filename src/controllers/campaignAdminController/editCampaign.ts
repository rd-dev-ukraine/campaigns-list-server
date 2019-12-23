import { check } from "express-validator";
import { editCampaignById } from "../../services/campaignsAdmin";

export const editCampaignControllerSchema = [
  check("title").isString(),
  check("views_count").isNumeric()
];

export async function editCampaignController(req: any, res: any) {
  const { id } = req.params;
  const { title, views_count } = req.body;

  try {
    const editResult = await editCampaignById(id, { title, views_count });
    res.send({result: editResult});
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}
