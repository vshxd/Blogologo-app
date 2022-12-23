import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledArticles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  margin-top: 50px;
`;

export const NewsElements = styled.li``;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Color.Primary_Light};
`;

export const FigCaption = styled.figcaption`
  background-color: ${Color.Secondary};
  padding: 30px 20px 30px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 130px;
`;

export const FigureDisc = styled.p`
  display: block;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  ${Typography.H3}
  color: ${Color.Primary};
`;
export const FigureDate = styled.p`
  ${Typography.B2}
  color: #828687;
  margin-bottom: 10px;
`;
