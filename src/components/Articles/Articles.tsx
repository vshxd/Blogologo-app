import { ArticlesCard } from "components";
import { useEffect } from "react";
import { fetchAllArticles, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { StyledArticles } from "./styles";

export const Articles = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, results } = useAppSelector(getAllArticles);
  useEffect(() => {
    dispatch(fetchAllArticles(12));
  }, [dispatch]);
  return (
    <>
      <StyledArticles>
        {isLoading ? <span>Loading...</span> : <ArticlesCard articles={results} />}
        {error && <span>{error}</span>}
      </StyledArticles>
    </>
  );
};
