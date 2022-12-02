import styled from "styled-components";
import { Color, H1 } from "./ui";
import { Typography } from "./ui/typography";

export const App = () => {
  return (
    <div>
      <StyledApp>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        nesciunt voluptatibus dolor dolores doloribus soluta expedita rerum
        voluptatem, iste vero eveniet ad esse, animi tenetur deserunt architecto
        obcaecati at velit! Ut esse quasi inventore neque, fugiat velit fugit
        quas nam earum beatae saepe ea dolor, omnis magnam, modi id nobis?
      </StyledApp>
    </div>
  );
};

const StyledApp = styled.h1`
  ${Typography.H1}
`;
