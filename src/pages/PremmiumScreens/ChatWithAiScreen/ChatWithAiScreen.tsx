import React, { useEffect } from "react";
import { Container, Row } from "@/theme/GlobalComponents";
import GoBack from "@/components/GoBack/GoBack";
import Text from "@/components/Text";
import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";

const ChatWithAiScreen = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleBottomNavigation(false))
  }, []);

  return (
    <Container style={{
        padding: 20,
    }}
    backgroundColor="white">
        <Row>
            <GoBack />
            <Text size="heading5">Linguao AI</Text>
            <Row>
                
            </Row>
        </Row>
    </Container>
  );
};

export default ChatWithAiScreen;
