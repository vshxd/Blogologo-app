import React from "react";
import UserIcon from "../../assets/img/header/HeaderUserIcon.png";
import { ImageText, StyledUserProfile, UserImage } from "..";

export const User = () => {
  return (
    <StyledUserProfile>
      <UserImage>
        <img src={UserIcon} alt="user-icon" />
        <ImageText>VS</ImageText>
      </UserImage>
      Vlad Shults
    </StyledUserProfile>
  );
};
