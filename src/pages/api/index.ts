// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ServerResponse } from "../../../types";
import { AxiosError } from "axios";
import apiConfig from "@/services/apiConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerResponse>
) {
  try {
    const [
      {
        data: { epoch },
      },
      { data: metrics },
    ] = await Promise.all([apiConfig.get("/time"), apiConfig.get("/metrics")]);
    console.log({ epoch, metrics });
    res.send({ epoch, metrics });
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
    res
      .status(error.response?.status || 500)
      .send({ message: error.response?.statusText || "An Error Occurred" });
  }
}
