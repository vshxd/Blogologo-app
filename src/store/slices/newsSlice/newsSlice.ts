import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { newsAPI } from "../../../services";
import { IBlog } from "../../../types";

interface INewsState {
  results: IBlog[];
  isLoading: boolean;
  error: null | string;
}

export const fetchAllNews = createAsyncThunk<IBlog[], number, { rejectValue: string }>(
  "news/fetchAll",
  async (params, { rejectWithValue }) => {
    try {
      return await newsAPI.getArticles(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: INewsState = {
  results: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newsSlice.reducer;
