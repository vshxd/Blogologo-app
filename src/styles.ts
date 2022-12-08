import styled from "styled-components";
import { Color, Media, Typography } from "./ui";

export const Wrapper = styled.div`
  background: ${Color.Primary_BG};
  min-height: 100vh;
`;
export const Container = styled.div`
  width: 1110px;
  padding: 10px;
  margin: 0 auto;

  ${Media.MD} {
    width: 740px;
  }
  ${Media.SM} {
    width: 520px;
  }
`;

export const Text = styled.p`
  ${Typography.H2}
`;
