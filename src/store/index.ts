import { store } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { getUser } from "./selectors/useSelectors";
import { useAppDispatch } from "./hooks/hooks";
import { toggleAuth } from "./slices/userSlice/userSlice";
import { getAllArticles } from "./selectors/articlesSelectors";
import { getAllNews } from "./selectors/newsSelectors";
import { fetchAllArticles } from "./slices/articlesSlice/articlesSlice";
import { fetchAllNews } from "./slices/newsSlice/newsSlice";

export {
  store,
  toggleAuth,
  useAppSelector,
  getUser,
  useAppDispatch,
  getAllArticles,
  fetchAllArticles,
  getAllNews,
  fetchAllNews,
};
