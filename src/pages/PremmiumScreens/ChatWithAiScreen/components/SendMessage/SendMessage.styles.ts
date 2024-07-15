import { theme } from "@/theme/theme";
import styled from "styled-components/native";

const Container = styled.View`
  border-radius: 10px;
  flex-direction: row;
  align-items: flex-end;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  align-items: flex-start;
  max-width: 85%;
  border-radius: 50px;
  background-color: ${theme.colors.greyScale100};
  padding-left: 20px;
`;

const SendButton = styled.TouchableOpacity`
  margin-left: auto;
  padding: 10px;
`;

export { Container, StyledTextInput, SendButton };