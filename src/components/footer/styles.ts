import styled from "styled-components";
import { Color } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextFooter = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${Color.Primary};
`;
export const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
`;
