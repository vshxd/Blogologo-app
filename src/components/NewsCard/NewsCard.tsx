import { IBlog } from "types";
import { FigCaption, Figure, FigureDate, FigureDisc, NewsElements, Image } from "./styles";

interface IProps {
  articles: IBlog[];
}

export const NewsCard = ({ articles }: IProps) => {
  return (
    <>
      {articles.map((item) => {
        return (
          <NewsElements key={item.id}>
            <Figure>
              <Image src={item.imageUrl} alt={item.title} />
              <FigCaption>
                <FigureDate>{new Date(item.publishedAt).toLocaleDateString()}</FigureDate>
                <FigureDisc>
                  {item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title}
                </FigureDisc>
              </FigCaption>
            </Figure>
          </NewsElements>
        );
      })}
    </>
  );
};
