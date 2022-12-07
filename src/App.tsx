import { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};
