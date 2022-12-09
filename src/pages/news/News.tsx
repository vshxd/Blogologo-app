import { useEffect, useState } from "react";
import { newsAPI } from "../../services";
import { IBlog } from "../../types";
import {
  Figure,
  NewsElements,
  StyledNews,
  Image,
  FigCaption,
  FigureDate,
  FigureDisc,
} from "./styles";

export const News = () => {
  const [news, setNews] = useState<IBlog[]>([]);
  useEffect(() => {
    newsAPI.getArticles().then(setNews);
  }, []);
  return (
    <StyledNews>
      {news.map((n) => (
        <NewsElements key={n.id}>
          <Figure>
            <Image src={n.imageUrl} alt={n.newSite} />
            <FigCaption>
              <FigureDate>{n.publishedAt}</FigureDate>
              <FigureDisc>{n.title}</FigureDisc>
            </FigCaption>
          </Figure>
        </NewsElements>
      ))}
    </StyledNews>
  );
};
