import { NextApiRequest, NextApiResponse } from "next";
import { getPresentation } from "@/utils/getPresentation";
import { routes } from "@/_back/routes";
import { container } from "@/_back/shared/infra/di/dependencies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV !== "production") {
    container.clearInstances();
  }

  const presentation = getPresentation(routes, req);

  if (presentation) {
    return presentation(req, res);
  }

  return res.status(404).json({ message: "Method not allowed" });
}
