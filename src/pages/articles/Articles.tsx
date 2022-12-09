import { useEffect, useState } from "react";
import { newsAPI } from "../../services";
import { IBlog } from "../../types";
import {
  NewsElements,
  StyledArticles,
  Image,
  FigureDisc,
  Figure,
  FigureDate,
  FigCaption,
} from "./styles";

export const Articles = () => {
  const [articles, setArticles] = useState<IBlog[]>([]);
  useEffect(() => {
    newsAPI.getArticles().then(setArticles);
  }, []);
  return (
    <StyledArticles>
      {articles.map((n) => (
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
    </StyledArticles>
  );
};
