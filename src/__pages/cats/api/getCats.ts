import { AxiosResponse } from "axios";
import { $api } from "@/app/api/ApiInstance";

export const getCats = async (size: string, mimeType: string, order: string) => {
  try {
    const response: AxiosResponse = await $api.get(
      `/search?limit=12&size=${size}&mime_types=${mimeType}&order=${order}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
