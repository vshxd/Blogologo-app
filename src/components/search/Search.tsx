import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/img/headerSearch.svg";
import { Color } from "../../ui";

export const StyledSearchIcon = styled(SearchIcon)`
  & path {
    stroke: ${({ color }) => color || "white"};
  }
`;

export const Search = () => {
  return <StyledSearchIcon color={Color.Primary} />;
};
