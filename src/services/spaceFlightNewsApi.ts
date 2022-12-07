import axios from "axios";
class NewsApi {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  async getAll() {
    const { data } = await this.API.get("articles");

    return data;
  }
}

export const newsAPI = new NewsApi();
