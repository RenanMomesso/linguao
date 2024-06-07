import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  height: 10%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  align-items: flex-start;
  padding-horizontal:20px;
  padding-bottom: 10px;
  justify-content: flex-end;
`;
