import { useEffect } from "react";
import { useToggle } from "../../hooks";
import { Color } from "../../ui";
import { StyledSearchIcon } from "./styles";

export const Search = () => {
  const [isSearchActive, toggleSearchActive] = useToggle(true);
  const handleSearch = () => {
    toggleSearchActive();
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      {isSearchActive ? (
        <input />
      ) : (
        <StyledSearchIcon color={Color.Primary} onClick={handleSearch} />
      )}
    </>
  );
};
