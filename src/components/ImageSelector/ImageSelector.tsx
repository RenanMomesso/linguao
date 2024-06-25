import React, { FC } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";
import styled from "styled-components/native";
import Text from "../Text";

export interface ImageMapItem {
  id: string;
  shape: "rectangle" | "circle";
  x1: number;
  y1: number;
  x2?: number;
  y2?: number;
  width?: number;
  height?: number;
  radius?: number;
  fill?: string;
  prefill?: string;
  name?: string;
}

interface ImageMapperProps {
  imgHeight: number;
  imgWidth: number;
  imgSource: ImageSourcePropType;
  imgMap: ImageMapItem[];
  containerStyle?: object;
  selectedAreaId?: string | string[];
  multiselect?: boolean;
  onPress: (
    item: ImageMapItem,
    index: number,
    event: GestureResponderEvent,
  ) => void;
}

const StyledImageBackground = styled.ImageBackground<{
  imgHeight: number;
  imgWidth: number;
}>`
  height: ${props => props.imgHeight}px;
  width: ${props => props.imgWidth}px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)<{
  top: number;
  left: number;
  width: number;
  height: number;
  backgroundColor?: string;
  borderRadius?: number;
}>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor || "transparent"};
  border-radius: ${props => props.borderRadius || 0}px;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
`;

const ImageMapper: FC<ImageMapperProps> = ({
  imgHeight,
  imgWidth,
  imgSource,
  imgMap,
  containerStyle,
  selectedAreaId,
  multiselect = false,
  onPress,
}) => {
  const buildStyle = (item: ImageMapItem) => {
    const { x1, y1, x2, y2, width, height, shape, fill, prefill, id, radius } =
      item;
    let areaId = selectedAreaId;
    if (
      multiselect &&
      (selectedAreaId === null || selectedAreaId === undefined)
    ) {
      areaId = [];
    }
    const style: any = {
      left: x1,
      top: y1,
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    };
    if (prefill !== null && prefill !== undefined) {
      if ((multiselect && !areaId?.includes(id)) || id !== areaId) {
        style.backgroundColor = prefill;
      }
    }
    if (fill !== null && fill !== undefined) {
      if ((multiselect && areaId?.includes(id)) || id === areaId) {
        style.backgroundColor = fill;
      }
    }
    if (shape === "rectangle") {
      style.width = width === null || width === undefined ? x2! - x1 : width;
      style.height =
        height === null || height === undefined ? y2! - y1 : height;
    }
    if (shape === "circle") {
      style.width = radius;
      style.height = radius;
      style.borderRadius = radius! / 2;
      style.borderWidth = 1;
    }
    return style;
  };

  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <StyledImageBackground
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        imageStyle={{ resizeMode: "cover" }}
        source={imgSource}>
        {imgMap?.map((item, index) => {
          const style = buildStyle(item);
          return (
            <StyledTouchableOpacity
              key={item.id}
              onPress={event => onPress(item, index, event)}
              top={style.top}
              left={style.left}
              width={style.width}
              height={style.height}
              backgroundColor={style.backgroundColor}
              borderRadius={style.borderRadius}>
              <Text>{item.name}</Text>
            </StyledTouchableOpacity>
          );
        })}
      </StyledImageBackground>
    </View>
  );
};

export default ImageMapper;
