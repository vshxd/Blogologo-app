import { store } from "./store";
import { useAppSelector } from "./hooks/hooks";
import { getUser } from "./selectors/useSelectors";
import { useAppDispatch } from "./hooks/hooks";
import { toggleAuth } from "./slices/userSlice/userSlice";
import { getAllNews } from "./selectors/newsSelectors";
import { fetchAllNews } from "./slices/newsSlice/newsSlice";

export { store, toggleAuth, useAppSelector, getUser, useAppDispatch, getAllNews, fetchAllNews };
