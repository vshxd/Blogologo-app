import { Search, User } from "..";
import { LogoIcon } from "../../assets";
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
