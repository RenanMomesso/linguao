import { Alert, ListRenderItem, Pressable, View } from "react-native";
import React from "react";
import { Container } from "@/theme/GlobalComponents";
import { Message } from "@/API";
import { FlatList } from "react-native-gesture-handler";
import Animated, { FadeIn } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";

interface ChatMessagesProps {
  messages: Message[] | null;
  otherUserId: string;
  otherUserName: string;
  flatListRef: React.RefObject<FlatList<Message>>;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const ChatMessages = ({
  messages,
  otherUserId = "",
  otherUserName = "",
  flatListRef,
}: ChatMessagesProps) => {
  // console.log("🚀 ~ messages:", messages?.map(item => item.text))
  const sortMessages = messages?.length
    ? [...messages]?.sort((a, b) => {
        if (a?.createdAt && b?.createdAt) {
          return (
            new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime()
          );
        }
        return 0;
      })
    : [];

  const getLastMessage = messages?.length
    ? messages[messages.length - 1]
    : null;

  const renderItem: ListRenderItem<Message> = ({ item }) => {
    if (item.text === "Menu" && item.userID === otherUserId) {
      return (
        <View
          style={{
            backgroundColor: theme.colors.Yellow,
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            alignSelf: "flex-start",
          }}>
          <View>
            
            <Text>Choose an option </Text>
            <View style={{ alignItems: "center" }}>
              <Button
                disabled={getLastMessage?.id === item.id}
                backgroundColor={
                  getLastMessage?.id === item.id ? "greyScale200" : "primary"
                }
                buttonText="Choose a menu"
                onPressButton={() => {
                  Alert.alert("Menu", "Menu");
                }}
                textColor="white"
              />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View
        style={{
          backgroundColor:
            item?.userID === otherUserId
              ? theme.colors.Yellow
              : theme.colors.greyScale200,
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          alignSelf: item?.userID === otherUserId ? "flex-start" : "flex-end",
        }}>
        <Text
          size="text"
          align={item.userID === otherUserId ? "left" : "right"}
          weight="semibold"
          color={item?.userID === otherUserId ? "primary" : "greyScale900"}>
          {item?.text}
        </Text>
      </View>
    );
  };

  return (
    <AnimatedContainer
      entering={FadeIn.duration(2000)}
      style={{
        marginTop: 20,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={sortMessages}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </AnimatedContainer>
  );
};

export default ChatMessages;
