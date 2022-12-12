import { store } from "./store";
import { toggleAuth } from "./userSlice/userSlice";
import { useAppSelector } from "./hooks/hooks";
import { getUser } from "./selectors/useSelectors";
import { useAppDispatch } from "./hooks/hooks";

export { store, toggleAuth, useAppSelector, getUser, useAppDispatch };
