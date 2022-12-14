import { News } from "..";
import { Button, ButtonActive, StyledBlog } from "./styles";

export const Blog = () => {
  return (
    <div>
      <StyledBlog>Blog</StyledBlog>
      <ButtonActive>Articles</ButtonActive>
      <Button>News</Button>
      <News />
    </div>
  );
};
