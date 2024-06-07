import React from "react";
import { HeaderContainer } from "./HomeHeader.styles";
import { Row } from "@/theme/GlobalComponents";
import { FireIcon, USAIcon, DiamondIcon, StarIcon } from "@/assets/images";
import Text from "@/components/Text";
import { useAppDispatch } from "@/store";
import { selectHomeItem } from "@/store/reducer/uiReducer";

const HomeHeader = () => {
  const dispatch = useAppDispatch();
  const selectHomeItemMenu = (item: string) => {
    dispatch(selectHomeItem(item));
  };

  return (
    <HeaderContainer>
      <Row style={{ justifyContent: "space-between", width: "100%" }}>
        <Row>
          <USAIcon onPress={() => selectHomeItemMenu("language")} />
          <Text size="text" weight="bold" color="white">
            EN
          </Text>
        </Row>
        <Row>
          <FireIcon />
          <Text size="text" weight="bold" color="white">
            4
          </Text>
        </Row>
        <Row>
          <DiamondIcon height={30} width={30} />
          <Text size="text" weight="bold" color="white">
            950
          </Text>
        </Row>
        <Row>
          <StarIcon />
          <Text size="text" weight="bold" color="white">
            950
          </Text>
        </Row>
      </Row>
    </HeaderContainer>
  );
};

export default HomeHeader;
