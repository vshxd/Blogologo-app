import { css } from "styled-components";
import { Media } from ".";

export const H1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;

  ${Media.SM} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const H2 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  ${Media.SM} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const H3 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

export const S1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
export const B1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
