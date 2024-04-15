import styled from "styled-components/native";
import { theme } from "./theme";

export type backgroundColor = keyof typeof theme.colors;
export const Container = styled.View<{ backgroundColor?: backgroundColor }>`
  flex: 1;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor || "greyScale100"]};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
  align-self: center;
  gap: 12px;
  background-color: white;
  padding-top: 20px;
`;