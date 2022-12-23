import styled from "styled-components";
import { Color, Typography } from "ui";

export const TabItem = styled.li<{ isActive: boolean }>`
  ${Typography.B2}
  color: ${Color.Primary};
  padding: 40px 40px 25px 40px;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${Color.Primary}` : `2px solid ${Color.Light}`};
`;
export const StyledTabsItem = styled.ul`
  display: flex;
`;
