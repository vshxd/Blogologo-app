import { Footer, Header } from "./components";
import { Blog } from "./pages";
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
