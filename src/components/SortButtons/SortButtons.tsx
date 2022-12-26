import { useState } from "react";
import { SortItem, StyledSortButtons } from "./styles";

export const SortButtons = () => {
  const buttons = ["Day", "Week", "Month", "Year"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <StyledSortButtons>
        {buttons.map((btn, i) => {
          return (
            <SortItem isActive={activeIndex === i} onClick={() => handleActiveIndex(i)} key={btn}>
              {btn}
            </SortItem>
          );
        })}
      </StyledSortButtons>
    </>
  );
};
