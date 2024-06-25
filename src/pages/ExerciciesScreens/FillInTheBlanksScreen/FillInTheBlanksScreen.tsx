import Button from "@/components/Button/Button";
import ImageMapper, {
  ImageMapItem,
} from "@/components/ImageSelector/ImageSelector";
import { ExercisesStack } from "@/interface/navigation.interface";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { Column, Row } from "@/theme/GlobalComponents";
import { windowHeight, windowWidth } from "@/theme/theme";
import React, { useState } from "react";
import DragAndDropList from "./DragAndDropList";
import { gql, useQuery } from "@apollo/client";
import {
  ListImageMapModalsQuery,
  ListImageMapModalsQueryVariables,
} from "@/API";
import { listImageMapModals } from "../../../graphql/queries";

interface FillInTheBlanksScreenProps {
  navigation: ExercisesStack;
}

const FillInTheBlanksScreen = ({ navigation }: FillInTheBlanksScreenProps) => {
  const { data } = useQuery<
    ListImageMapModalsQuery,
    ListImageMapModalsQueryVariables
  >(gql(listImageMapModals));
  const [selectedAreaId, setSelectedAreaId] = useState([]);
  const items = data?.listImageMapModals?.items[0]?.items;
  const image = data?.listImageMapModals?.items[0]?.imageUrl;

  const modifyItems = items?.items.map(item => {
    return {
      ...item,
      prefill: overlayColor,
      radius: 25,
      shape: "circle",
    };
  });


  const mapperAreaClickHandler = async (item, idx, event) => {
    const currentSelectedAreaId = selectedAreaId;
    if (Array.isArray(currentSelectedAreaId)) {
      const indexInState = currentSelectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {
        setSelectedAreaId([
          ...currentSelectedAreaId.slice(0, indexInState),
          ...currentSelectedAreaId.slice(indexInState + 1),
        ]);
      } else {
        // alert(`Clicked Item Id: ${item.id}`);

        console.log("Setting Id", item.id);
        setSelectedAreaId([...currentSelectedAreaId, item.id]);
      }
    } else {
      if (item.id === currentSelectedAreaId) {
        setSelectedAreaId(null);
      } else {
        setSelectedAreaId(item.id);
      }
    }
  };

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Align the items with the numbers">
      <DragAndDropList />
      <Row style={{ position: "relative", alignItems: "flex-start" }}>
        <ImageMapper
          imgHeight={windowHeight / 1.34}
          imgWidth={windowWidth - 40}
          imgSource={{
            uri: image,
          }}
          imgMap={modifyItems as unknown as ImageMapItem[]}
          onPress={(item, idx, event) =>
            mapperAreaClickHandler(item, idx, event)
          }
          containerStyle={{ top: 0 }}
          selectedAreaId={selectedAreaId}
          multiselect
        />
      </Row>

      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor="primary"
          buttonText="Next"
          onPressButton={() =>
            navigation.navigate("SelectCorrectImgTextScreen")
          }
          touchSoundDisabled={false}
          textColor="Red"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default FillInTheBlanksScreen;

const overlayColor = "rgba(255, 0, 0, 0.5)";
const RECTANGLE_MAP: ImageMapItem[] = [
  {
    id: "1",
    name: "2",
    shape: "circle",
    x2: 155,
    y2: windowHeight / 1.3 - 10,
    x1: 125,
    y1: 125,
    prefill: overlayColor,
    fill: overlayColor,
    radius: 25,
  },
  {
    id: "2",
    name: "2",
    shape: "circle",
    x2: 120,
    y2: 400,
    x1: 90,
    y1: 370,
    prefill: overlayColor,
    fill: overlayColor,
    radius: 25,
  },

  {
    id: "8",
    name: "4",
    shape: "circle",
    x2: 240,
    y2: 140,
    x1: 210,
    y1: 120,
    prefill: overlayColor,
    fill: overlayColor,
    radius: 25,
  },
];
