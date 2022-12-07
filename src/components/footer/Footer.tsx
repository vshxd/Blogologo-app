import { useEffect, useState } from "react";
import { Container, StyledFooter, TextFooter, ThemeButton } from "./styles";

type Theme = "dark" | "light";
export const Footer = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <Container>
      <StyledFooter>
        <TextFooter>©2022 Blogolog</TextFooter>
        <ThemeButton onClick={handleTheme}>Theme</ThemeButton>
      </StyledFooter>
    </Container>
  );
};
