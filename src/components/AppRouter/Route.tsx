import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Articles, Blog, News } from "../../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};
