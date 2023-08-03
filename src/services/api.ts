import axios from "axios";
import { ServerResponse } from "../../types";

export const fetchData = async (): Promise<ServerResponse> => {
  const { data } = await axios.get("/api");
  return data;
};
