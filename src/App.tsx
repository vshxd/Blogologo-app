import { Footer, Header } from "./components";
import { AppRouter } from "./components/AppRouter/Route";
import { Container, Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <AppRouter />
        <Footer />
      </Container>
    </Wrapper>
  );
};
