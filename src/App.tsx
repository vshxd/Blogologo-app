import { AnyARecord } from "dns";
import { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { newsAPI } from "./services/spaceFlightNewsApi";
import { Container, Wrapper } from "./styles";

export const App = () => {
  const [news, setNews] = useState<any[]>([]);
  useEffect(() => {
    newsAPI.getAll().then(setNews);
  }, []);
  return (
    <Wrapper>
      <Header />
      <Container>
        <ul>
          {news.map((n) => (
            <li>{n.title}</li>
          ))}
        </ul>
        <Footer />
      </Container>
    </Wrapper>
  );
};
