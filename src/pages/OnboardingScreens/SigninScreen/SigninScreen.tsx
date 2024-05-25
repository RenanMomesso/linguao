import React from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import GoBack from "@/components/GoBack/GoBack";
import TextComponent from "@/components/Text";
import { TextInput } from "react-native";
import Button from "@/components/Button/Button";

const SigninScreen = () => {
  return (
    <Container backgroundColor="white" style={{ padding: 20 }}>
      <GoBack />
      <TextComponent size="heading4" weight="bold" align="left">
        Sign In
      </TextComponent>

      <TextComponent size="text" align="left">
        Email
      </TextComponent>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <TextComponent size="text" align="left">
        Password
      </TextComponent>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <TextComponent>
        Forgot your password?{" "}
        <TextComponent color="primary">Reset it</TextComponent>
      </TextComponent>
      <BottomContainer>
        <Button
          buttonText="SIGN IN"
          onPressButton={() => {}}
          backgroundColor="primary"
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default SigninScreen;
