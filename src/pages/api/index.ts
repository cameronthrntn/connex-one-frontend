import type { NextApiRequest, NextApiResponse } from "next";
import { ServerResponse } from "../../../types";
import { AxiosError } from "axios";
import apiConfig from "@/services/apiConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerResponse>,
) {
  try {
    const [
      {
        data: { epoch },
      },
      { data: metrics },
    ] = await Promise.all([apiConfig.get("/time"), apiConfig.get("/metrics")]);
    res.send({ epoch, metrics });
  } catch (e) {
    const error = e as AxiosError;
    res
      .status(error.response?.status || 500)
      .send({ message: error.response?.statusText || "An Error Occurred" });
  }
}
