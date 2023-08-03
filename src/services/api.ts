import axios from "axios";
import { ServerResponse } from "../../types";

export const fetchData = async (): Promise<ServerResponse> => {
  try {
    const { data } = await axios.get("/api");
    return data;
  } catch (e) {
    throw e;
  }
};
