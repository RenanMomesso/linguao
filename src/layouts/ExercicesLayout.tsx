import { StatusBar } from "react-native";
import React from "react";
import { BottomContainer, Container, HR } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import CloseIcon from "@/assets/images/closeIcon.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";

interface ExercicesLayoutProps {
  children: React.ReactNode;
  barProgressPercentage: number;
  pageTitle: string;
}
const ExercicesLayout = ({
  barProgressPercentage,
  children,
  pageTitle,
}: ExercicesLayoutProps) => {
  const navigation = useTypedNavigation();
  return (
    <Container
      backgroundColor="white"
      padding={20}
      >
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <BarProgress
        percentageStatus={barProgressPercentage}
        icon={<CloseIcon onPress={() => navigation.goBack()} />}
      />
      <TextComponent
        size="heading5"
        weight="bold"
        align="left"
        style={{
          marginTop: 30,
        }}>
        {pageTitle}
      </TextComponent>
      <HR
        style={{
          marginVertical: 20,
          backgroundColor: theme.colors.greyScale300,
        }}
      />
      <>{children}</>
      <BottomContainer />
    </Container>
  );
};

export default ExercicesLayout;

ExercicesLayout.Footer = ({ children }: any) => (
  <BottomContainer>{children}</BottomContainer>
);
