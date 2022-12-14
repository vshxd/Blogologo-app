import { useEffect, useState } from "react";
import { Toggle } from "..";

import { StyledFooter, TextFooter } from "./styles";

type Theme = "dark" | "light";
export const Footer = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledFooter>
      <TextFooter>©2022 Blogologo</TextFooter>
      <Toggle onChange={handleTheme} />
    </StyledFooter>
  );
};
