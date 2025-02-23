import axios from "axios";
import { MinecraftServerStatus } from "@/types/minecraft";

export const fetchServerStatus = async (): Promise<MinecraftServerStatus> => {
  try {
    const response =
      await axios.get<MinecraftServerStatus>("/api/server-status");
    return response.data;
  } catch (error) {
    throw error;
  }
};
