import React, { useCallback, useEffect } from "react";
import { Container, Row } from "@/theme/GlobalComponents";
import Text from "@/components/Text";
import FeedPostItem from "./components/FeedPostItem/FeedPostItem";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PostStack } from "@/interface/navigation.interface";
import useShowBottomNavigation from "@/hooks/useShowBottomNavigation";

const WorldConnectionHomeScreen = () => {
  const flatListRef = React.useRef<FlatList>(null);
  useShowBottomNavigation();
  const navigation = useNavigation<PostStack>();
  const createPost = () => {
    navigation.navigate("CreatePost");
  };

  return (
    <Container padding={20} backgroundColor="white">
      <Row style={{ marginBottom: 30 }}>
        <Text size="heading4" weight="black" align="left">
          Feeds
        </Text>
        <Text onPress={createPost}>Create Post</Text>
      </Row>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Row style={{ height: 10 }} />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <FeedPostItem />}
        keyExtractor={item => item.toString()}
      />
      <FeedPostItem />
    </Container>
  );
};

export default WorldConnectionHomeScreen;
