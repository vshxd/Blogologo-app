import { useEffect, useState } from "react";
import { StyledFooter, TextFooter, ThemeButton } from "./styles";

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
    <StyledFooter>
      <TextFooter>©2022 Blogologo</TextFooter>
      <ThemeButton onClick={handleTheme}>Theme</ThemeButton>
    </StyledFooter>
  );
};
