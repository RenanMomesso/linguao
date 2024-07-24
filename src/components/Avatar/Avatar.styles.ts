import styled from "styled-components/native";
import EditIconSvg from "@/assets/images/EditIcon.svg";
const AvatarContainer = styled.View`
  /* width: 120px; */
  /* height: 120px; */
  border-radius: 75px;
  align-self: center;
  /* margin-top: 30px; */
  `;

const AvatarImage = styled.Image`
  border: 1px solid lightgray;
  background-color: white;
  width: 120px;
  height: 120px;
  border-radius: 75px;
  align-self: center;
`;

const AvatarEditIcon = styled(EditIconSvg)`
  position: absolute;
  bottom: 0;
  right: 10;
`;

export { AvatarContainer, AvatarImage, AvatarEditIcon };
