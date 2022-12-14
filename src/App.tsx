import { Blog, Footer, Header } from "./components";
import { Container, Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Blog />
        <Footer />
      </Container>
    </Wrapper>
  );
};
