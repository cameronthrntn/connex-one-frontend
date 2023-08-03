import axios from "axios";

const timeout = 10000;

export default axios.create({
  baseURL: process.env.BASE_URL,
  timeout,
  headers: { Authorization: process.env.SECRET || "" },
});
