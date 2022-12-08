import { useEffect, useState } from "react";
import { newsAPI } from "../../services";

export const Articles = () => {
  const [news, setNews] = useState<any[]>([]);
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
