import React, { useCallback, useEffect } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import AwesomeBaloon from "@/assets/images/Awesome.svg";
import OnboardingCompletedIlustration from "@/assets/images/OnboardingCompleted.svg";
import Button from "@/components/Button/Button";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const OnboardingCompleted = () => {
  const navigation = useTypedNavigation();

  return (
    <Container
      backgroundColor="white"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 40,
      }}>
      <AwesomeBaloon 
      style={{marginTop:-40}} 
      />
      <OnboardingCompletedIlustration />
      <TextComponent size="heading5" weight="bold" color="greyScale700">
        Create a profile now so you can save progress and connect with friends.
        Or you can skip it.
      </TextComponent>
      <BottomContainer>
        <Button
          buttonText="CREATE PROFILE"
          onPressButton={() => navigation.navigate("CreateProfileScreen")}
          backgroundColor="primary"
          textColor="white"
        />
        <Button
          buttonText="SKIP"
          onPressButton={() => navigation.navigate("UserNavigations")}
          backgroundColor="primary100"
          textColor="primary"
        />
      </BottomContainer>
    </Container>
  );
};

export default OnboardingCompleted;
