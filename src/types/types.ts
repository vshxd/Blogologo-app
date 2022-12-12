import { store } from "../store";

export interface IBlog {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  newSite: string;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
