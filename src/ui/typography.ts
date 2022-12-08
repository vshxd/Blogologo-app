import { css } from "styled-components";
import { Media } from ".";

class TypographyHeading {
  H1 = css`
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
    ${Media.SM} {
      font-size: 32px;
      line-height: 48px;
    }
  `;
  H2 = css`
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    ${Media.SM} {
      font-size: 24px;
      line-height: 36px;
    }
  `;
  H3 = css`
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  `;
  S1 = css`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  `;
  B1 = css`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  `;
}
export const Typography = new TypographyHeading();
