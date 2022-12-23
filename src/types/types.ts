export interface IBlog {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  newSite: string;
}
export interface ITab {
  id: string | number;
  label: string | number;
  isActive: boolean;
}
