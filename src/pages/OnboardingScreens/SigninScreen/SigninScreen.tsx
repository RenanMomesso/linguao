import React, { useRef, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import GoBack from "@/components/GoBack/GoBack";
import TextComponent from "@/components/Text";
import { Alert, Keyboard, TextInput } from "react-native";
import Button from "@/components/Button/Button";
import { signIn } from "aws-amplify/auth";

const SigninScreen = () => {
  const [email, setEmail] = useState("renanzin@gmail.com");
  const [password, setPassword] = useState("renan123");
  const passwordRef = useRef<TextInput>(null);

  const handleSignin = async () => {
    try {
      await signIn({
        username: email,
        password,
      });
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

  return (
    <Container backgroundColor="white" style={{ padding: 20 }}>
      <GoBack lastRoute={"WelcomeScreen"} />
      <TextComponent size="heading4" weight="bold" align="left">
        Sign In
      </TextComponent>
      <TextComponent size="text" align="left">
        Email
      </TextComponent>
      <TextInput
        autoComplete="email"
        onEndEditing={() => passwordRef.current?.focus()}
        onChangeText={setEmail}
        returnKeyLabel="next"
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
        ref={passwordRef}
        onChangeText={setPassword}
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
          onPressButton={handleSignin}
          backgroundColor="primary"
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default SigninScreen;
