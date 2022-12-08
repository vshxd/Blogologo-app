import { useEffect, useState } from "react";
import { newsAPI } from "../../services";
import { IBlog } from "../../types";

export const Articles = () => {
  const [news, setNews] = useState<IBlog[]>([]);
  useEffect(() => {
    newsAPI.getAll().then(setNews);
  }, []);
  return (
    <ul>
      {news.map((n) => (
        <li key={n.id}>{n.title}</li>
      ))}
    </ul>
  );
};
