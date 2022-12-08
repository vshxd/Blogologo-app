import UserIcon from "../../assets/img/header/HeaderUserIcon.png";
import { ImageText, StyledUserProfile, UserImage } from "./styles";

// interface IUser {
//   value: string;
// }
export const User = () => {
  // const name = value;
  return (
    <StyledUserProfile>
      <UserImage>
        <img src={UserIcon} alt="user-icon" />
        <ImageText>VS</ImageText>
      </UserImage>
      <p>Vlad Shults</p>
    </StyledUserProfile>
  );
};
