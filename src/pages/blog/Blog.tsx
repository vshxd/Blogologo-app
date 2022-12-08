import { NavLink } from "react-router-dom";

export const Blog = () => {
  return (
    <div>
      Blog
      <nav>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>
    </div>
  );
};
