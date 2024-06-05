import React, { memo } from "react";
import styled from "styled-components/native";
import { theme } from "@/theme/theme";
import { TextProps, TextStyle } from "react-native";
import { css } from "styled-components";

export type TextSizes = keyof typeof theme.fontSize;

export interface TextComponentProps extends TextProps {
  size?: TextSizes;
  color?: keyof typeof theme.colors;
  align?: TextStyle["textAlign"];
  weight?: keyof typeof theme.fontWeight;
  children: React.ReactNode;
}

export type StyledTextProps = Omit<TextComponentProps, "children">;

export const TextContainer = styled.Text<StyledTextProps>`
  ${({ theme, color, size, align, weight }) => css`
    font-size: ${theme.fontSize[size || "text"]}px;
    color: ${theme.colors[color || "greyScale100"]};
    text-align: ${align};
    font-weight: 200;
    font-family: ${theme.fontWeight[weight || "regular"]};
    letter-spacing: 0.2px;
  `}
`;

const TextComponent = ({
  children,
  size = "text",
  color = "greyScale900",
  align = "center",
  weight = "semibold",
  ...rest
}: TextComponentProps) => {
  console.log('TextComponent rendered');
  return (
    <TextContainer
      weight={weight}
      {...rest}
      align={align}
      size={size}
      color={color}>
      {children}
    </TextContainer>
  );
};

export default memo(TextComponent);
