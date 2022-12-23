import { NewsCard } from "components";
import { useEffect } from "react";
import { fetchAllNews, getAllNews, useAppDispatch, useAppSelector } from "store";

import { SortButton, SortButtonActive, SortMenu, StyledNews } from "./styles";

export const News = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, results } = useAppSelector(getAllNews);
  useEffect(() => {
    dispatch(fetchAllNews(12));
  }, [dispatch]);
  return (
    <>
      <SortMenu>
        <SortButtonActive>Day</SortButtonActive>
        <SortButton>Week</SortButton>
        <SortButton>Month</SortButton>
        <SortButton>Year</SortButton>
      </SortMenu>

      <StyledNews>
        {isLoading ? <span>Loading...</span> : <NewsCard articles={results} />}
        {error && <span>{error}</span>}
      </StyledNews>
    </>
  );
};
