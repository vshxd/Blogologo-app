import { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";

type Theme = "dark" | "light";

export const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <Title>Blog</Title>
      <button onClick={handleTheme}>Change Theme</button>
    </Wrapper>
  );
};
