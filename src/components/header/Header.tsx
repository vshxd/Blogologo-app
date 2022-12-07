import { Search, StyledHeader, User } from "..";
import { ReactComponent as LogoIcon } from "../../assets/img/header/HeaderLogo.svg";

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
