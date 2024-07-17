import { View, FlatList } from "react-native";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { listFlashCards } from "@/graphql/queries";
import { useAppSelector } from "@/store";
import { ListFlashCardsQuery, ListFlashCardsQueryVariables } from "@/API";
import FlashCardItem from "./components/FlashCardItem";
import { Container, Row } from "@/theme/GlobalComponents";
import GoBack from "@/components/GoBack/GoBack";
import Text from "@/components/Text";

const MyFlashCardScreen = () => {
  const {
    user: { id: userId },
  } = useAppSelector(state => state.user);
  const { data, loading } = useQuery<
    ListFlashCardsQuery,
    ListFlashCardsQueryVariables
  >(gql(listFlashCards), {
    variables: {
      filter: {
        user: {
          eq: String(userId),
        },
      },
      limit: 10,
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container padding={20} backgroundColor="white">
      <Row>
        <GoBack />
        <Text size="heading3" weight="black">
          Flashcards
        </Text>
      </Row>
      <FlatList
        style={{ marginTop: 20 }}
        ListHeaderComponent={() => <View />}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 20,
          flex: 1,
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 16,
            }}
          />
        )}
        ListEmptyComponent={<Text>Empty</Text>}
        data={data?.listFlashCards?.items || []}
        keyExtractor={item => item?.id || ""}
        numColumns={2}
        renderItem={({ item }) => <FlashCardItem {...item} />}
      />
    </Container>
  );
};

export default MyFlashCardScreen;
