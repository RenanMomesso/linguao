import { Alert, ListRenderItem, Pressable, View } from "react-native";
import React, { memo } from "react";
import { Container, Row } from "@/theme/GlobalComponents";
import { Message } from "@/API";
import { FlatList } from "react-native-gesture-handler";
import Animated, { FadeIn } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import SpeakerWithBars from "@/pages/ExerciciesScreens/SelectCorrectlyAudioScreen/SpeakerWithBars";
import Waveform from "@/pages/Home/components/WaveForm";

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
  const sortMessages = messages?.length
    ? [...messages]?.sort((a, b) => {
        if (a?.createdAt && b?.createdAt) {
          return (
            new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
          );
        }
        return 0;
      })
    : [];

  const getLastMessage = messages?.length
    ? messages[messages.length - 1]
    : null;

  const RenderItem: ListRenderItem<Message> = ({ item }) => {
    const [transpile, setTranspile] = React.useState(false);
    const [playAudio, setPlayAudio] = React.useState(false);

    if (item.messageType === "AUDIO") {
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
            width:300
          }}>
          <Waveform audioPath={item.text} duration={10} />
        </View>
      );
    }

    if (item.text === "Menu" && item.userID === otherUserId) {
      return (
        <View
          style={{
            borderRadius: 10,
            marginBottom: 10,
            alignSelf: "flex-start",
            backgroundColor: "blue",
          }}>
          <View
            style={{
              backgroundColor: theme.colors.white,
              padding: 4,
              borderRadius: 8,
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
        {transpile && item.userID === otherUserId ? (
          <Text
            onLongPress={() => {
              speakerVoiceMessage(item.text);
            }}
            size="text"
            align={item.userID === otherUserId ? "left" : "right"}
            weight="semibold"
            color={"greyScale900"}>
            {item?.text}
          </Text>
        ) : item.userID !== otherUserId ? (
          <Text
            onLongPress={() => {
              speakerVoiceMessage(item.text);
            }}
            size="text"
            align={item.userID === otherUserId ? "left" : "right"}
            weight="semibold"
            color={"greyScale900"}>
            {item?.text}
          </Text>
        ) : (
          <></>
        )}
        {item?.userID === otherUserId && (
          <View style={{ gap: 6 }}>
            <SpeakerWithBars
              playSound={playAudio}
              sentence={item.text}
              size="small"
            />
            <Row>
              <Pressable
                style={{
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: theme.colors.greyScale100,
                  alignSelf: "flex-start",
                }}
                onPress={() => {
                  Alert.alert("User Info", `User: ${otherUserName}`);
                }}>
                <Text size="text" color="primary" weight="semibold">
                  Translate
                </Text>
              </Pressable>
              <Pressable
                style={{
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: theme.colors.greyScale100,
                  alignSelf: "flex-start",
                }}
                onPress={() => {
                  setTranspile(c => !c);
                }}>
                {
                  <Text size="text" color="primary" weight="semibold">
                    Transpile
                  </Text>
                }
              </Pressable>
            </Row>
          </View>
        )}
      </View>
    );
  };

  return (
    <AnimatedContainer
      padding={5}
      entering={FadeIn.duration(500)}
      style={{
        borderRadius: 12,
        flex: 1,
      }}
      backgroundColor={"greyScale400"}>
      <FlatList
        inverted
        automaticallyAdjustContentInsets
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={sortMessages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, separators }) => (
          <RenderItem item={item} separators={separators} index={+item.id} />
        )}
      />
    </AnimatedContainer>
  );
};

export default memo(ChatMessages);
