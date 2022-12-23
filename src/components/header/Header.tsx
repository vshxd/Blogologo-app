import { LogoIcon } from "assets";
import { Search, User } from "components";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <a href="#">
        <LogoIcon />
      </a>
      <a href="#">
        <Search />
      </a>
      <User />
    </StyledHeader>
  );
};
