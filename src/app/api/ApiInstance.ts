import axios from "axios";

export const BASE_URL = "https://api.thecatapi.com/v1/images";

export const $api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: process.env.API_KEY,
  },
});
