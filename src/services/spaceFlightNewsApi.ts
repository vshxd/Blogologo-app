import axios from "axios";
import { IBlog } from "../types";
class NewsApi {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly ENDPOINT = {
    articles: "articles",
    blogs: "blogs",
    limit: "_limit",
    title: "title_contains",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles() {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<IBlog[]>(this.ENDPOINT.articles, { params });

    return data;
  }
  public async getNews() {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<IBlog[]>(this.ENDPOINT.blogs, { params });

    return data;
  }
  public async getArticlesById(id: number) {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<IBlog[]>(`${this.ENDPOINT.articles}/${id}`, { params });

    return data;
  }
  public async getNewsById(id: number) {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<IBlog[]>(`${this.ENDPOINT.blogs}/${id}`, { params });

    return data;
  }
}

export const newsAPI = new NewsApi();
