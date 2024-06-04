import React, { useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import Button from "@/components/Button/Button";
import TextComponent from "@/components/Text";
import GoBack from "@/components/GoBack/GoBack";
import { BottomContainer } from "@/theme/GlobalComponents";
import AccountLayout from "@/layouts/AccountLayout";
import styled from "styled-components/native";
import useKeyboard from "@/hooks/useKeyboard";
import { signUp } from "aws-amplify/auth";
import { useAppDispatch } from "@/store";
import { setLoading } from "@/store/reducer/uiReducer";

export const TextInputS = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.greyScale300};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
`;

const FormInput = ({ label, value, onChangeText }) => (
  <>
    <TextComponent align="left">{label}</TextComponent>
    <TextInputS value={value} onChangeText={onChangeText} />
  </>
);

const CreateProfileScreen = () => {
  const dispatch = useAppDispatch();
  const isOpenKeyboard = useKeyboard();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = useCallback((field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  }, []);

  const handleCreateAccount = async () => {
    dispatch(setLoading(true));
    Keyboard.dismiss();
    // Call API to create account
    try {
      const { isSignUpComplete, nextStep, userId } = await signUp({
        username: formData.email,
        password: formData.password,

        options: {
          userAttributes: {
            email: formData.email,
            name: formData.fullName,
            birthdate: "1990-01-01",
            phone_number: "+1234567890",
            language: "English",
            languageLevel: "A1",
          },
        },
      });

      console.log({ isSignUpComplete, nextStep, userId });
    } catch (error) {
      console.log({ error });
      Alert.alert("Error", (error as Error).message);
    }
    dispatch(setLoading(false));
  };

  return (
    <AccountLayout>
      <GoBack />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, gap: 10, padding: 16 }}>
          <TextComponent size="heading3" align="left" weight="bold">
            Let's create your profile
          </TextComponent>

          <FormInput
            label="Full name"
            value={formData.fullName}
            onChangeText={value => handleChange("fullName", value)}
          />
          <FormInput
            label="Email"
            value={formData.email}
            onChangeText={value => handleChange("email", value)}
          />

          <FormInput
            label="Password"
            value={formData.password}
            onChangeText={value => handleChange("password", value)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      {!isOpenKeyboard && (
        <BottomContainer>
          <Button
            buttonText="Continue"
            onPressButton={handleCreateAccount}
            backgroundColor="primary"
            textColor="white"
          />
        </BottomContainer>
      )}
    </AccountLayout>
  );
};

export default CreateProfileScreen;
