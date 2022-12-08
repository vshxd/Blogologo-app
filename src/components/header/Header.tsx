import { Search, User } from "..";
import { ReactComponent as LogoIcon } from "../../assets/img/headerLogo.svg";
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
