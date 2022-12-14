import styled from "styled-components";
import { Color, Typography } from "../../ui";

export const StyledBlog = styled.div`
  ${Typography.H1}
  color:${Color.Primary}
`;

export const Button = styled.button`
  ${Typography.B2}
  color: ${Color.Primary};
  padding: 20px 30px;
  background-color: inherit;
  margin-top: 20px;
  :hover {
    color: ${Color.Primary_Light};
  }
`;
export const ButtonActive = styled(Button)`
  border-bottom: 2px solid ${Color.Primary};
  :hover {
    color: ${Color.Primary};
  }
`;
