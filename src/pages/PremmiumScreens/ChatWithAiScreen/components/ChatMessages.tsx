import { Alert, ListRenderItem, Pressable, View } from "react-native";
import React, { memo } from "react";
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
    console.log({item})
    if (item.text === "Menu" && item.userID === otherUserId) {
      return (
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            alignSelf: "flex-start",
          }}>
          <View style={{
            backgroundColor: theme.colors.white,
            padding:4,
            borderRadius:8
          }}>
            
            <Text>Choose an option </Text>
            <View style={{ alignItems: "center" }}>
              <Button
                disabled={getLastMessage?.id === item.id}
                backgroundColor={
                  getLastMessage?.id === item.id ? "white" : "primary"
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
              ? theme.colors.white
              : theme.colors.Green,
          padding: 10,
          borderRadius: 12,
          alignSelf: item?.userID === otherUserId ? "flex-start" : "flex-end",
        }}>
        <Text
          size="text"
          align={item.userID === otherUserId ? "left" : "right"}
          weight="semibold"
          color={'greyScale900'}>
          {item?.text}
        </Text>
      </View>
    );
  };

  return (
    <AnimatedContainer
      entering={FadeIn.duration(500)}
      backgroundColor={'primary'}
      style={{
        marginTop: 20,
      }}>
      <FlatList
        
        automaticallyAdjustContentInsets
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={sortMessages}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </AnimatedContainer>
  );
};

export default memo(ChatMessages);
