import { css } from "styled-components";
import { Color } from "./colors";

export const H1 = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Primary};

  @media (max-width: 568px) {
    font-size: 32px;
    line-height: 48px;
  }
`;
