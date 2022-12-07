import styled from "styled-components";
import { B1, Color } from "../../ui";

export const StyledUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${B1}
  color: ${Color.Primary}
`;
export const UserImage = styled.div`
  position: relative;
`;
export const ImageText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Color.White};
`;
