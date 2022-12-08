import axios from "axios";
import { IBlog } from "../types";
class NewsApi {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAll() {
    const { data } = await this.API.get<IBlog[]>("articles");

    return data;
  }
}

export const newsAPI = new NewsApi();
