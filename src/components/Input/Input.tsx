import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export interface InputProps extends TextInputProps {
  type?: "text" | "textarea";
}

const Container = styled.View<{ type: string }>`
  flex: 1;
  max-height: 240px;
  padding: 10px;
  background-color: ${({ type }) =>
    type === "textarea" ? "#f9f9f9" : "transparent"};
  border: ${({ type }) => (type === "textarea" ? "1px solid #ccc" : "none")};
`;

const StyledInput = styled.TextInput<{ type: string }>`
  ${({ type }) =>
    type === "textarea" &&
    `
    textAlignVertical: top;
    background-color: #f9f9f9;
    padding: 10px;
  `}
  ${({ type }) =>
    type !== "textarea" &&
    `
    border: 1px solid #ccc;
    padding: 10px;
    background-color: white;
  `}
`;

const CustomInput: React.FC<InputProps> = ({ type = "text", ...props }) => {
  return (
    <Container type={type}>
      <StyledInput

        {...props}
        type={type}
        multiline={type === "textarea"}
        numberOfLines={type === "textarea" ? 10 : 1}
      />
    </Container>
  );
};

export default CustomInput;
