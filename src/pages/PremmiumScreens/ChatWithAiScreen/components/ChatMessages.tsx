import { Alert, ListRenderItem, Pressable, View } from "react-native";
import React, { memo } from "react";
import { Container, Row } from "@/theme/GlobalComponents";
import { MenuType, Message, MessageType } from "@/API";
import { FlatList } from "react-native-gesture-handler";
import Animated, { FadeIn } from "react-native-reanimated";
import { theme, windowWidth } from "@/theme/theme";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";
import { speakerVoiceMessage, stopSpeakerVoice } from "@/utils/speakerVoice";
import SpeakerWithBars from "@/pages/ExerciciesScreens/SelectCorrectlyAudioScreen/SpeakerWithBars";
import Waveform from "@/pages/Home/components/WaveForm";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import Avatar from "@/components/Avatar/Avatar";
import AudioPlay from "@/components/AudioPlay/AudioPlay";
import calculateDuration from "@/utils/calculateDurationAudio";
import ChatMessageAiAudio from "./ChatMessageUserAudio";
import ChatMessageItemAiAudio from "./ChatMessageItemAiAudio";
import ChatUserAudio from "./ChatMessageUserAudio";

interface ChatMessagesProps {
  messages: Message[] | null;
  otherUserId: string;
  otherUserName: string;
  flatListRef: React.RefObject<FlatList<Message>>;
  loadingNewMessage: boolean;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const ChatMessages = ({
  messages,
  otherUserId = "",
  otherUserName = "",
  flatListRef,
  loadingNewMessage = false,
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

  const [selectedItem, setSelectedItem] = React.useState("");

  const RenderItem = ({
    item,
    setSelectedItem,
    selectedItem,
  }: {
    item: Message;
    setSelectedItem: (id: string) => void;
    selectedItem: string;
  }) => {
    const [transpile, setTranspile] = React.useState(false);
    const [playAudio, setPlayAudio] = React.useState(false);

    const handleLongPress = () => {
      setSelectedItem(item.id);
    };

    const handlePlayAudio = () => {
      if (playAudio) {
        setPlayAudio(false);
        stopSpeakerVoice();
        return;
      }
      setSelectedItem("");
      setPlayAudio(true);
      speakerVoiceMessage(item.audioText || "");
    };

    if (item.messageType === "AUDIO" && item.userID !== otherUserId)
      return <ChatUserAudio text={item.text} />;

    if (item.messageType === "AUDIO" && item.userID === otherUserId) {
      return (
        <ChatMessageItemAiAudio
          audioPath={item.text}
          setPlayAudio={handlePlayAudio}
          audioIsPlaying={playAudio}
          audioText={item.audioText || ""}
          handleLongPress={handleLongPress}
        />
      );
    }

    if (item?.messageType === "TEXT") {
      return (
        <Row
          style={{
            backgroundColor:
              item?.userID === otherUserId
                ? theme.colors.white
                : theme.colors.Green,
            padding: 10,
            borderRadius: 12,
            alignSelf: item?.userID === otherUserId ? "flex-start" : "flex-end",
          }}>
          <Text align="justify">{item.text}</Text>
        </Row>
      );
    }

    return <></>;
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
        ListHeaderComponent={() => {
          return loadingNewMessage ? (
            <View style={{ padding: 10 }}>
              <Text size="text" align="center" color="greyScale900">
                Loading new messages...
              </Text>
            </View>
          ) : null;
        }}
        automaticallyAdjustContentInsets
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={sortMessages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, separators }) => (
          <RenderItem
            item={item}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        )}
      />
    </AnimatedContainer>
  );
};

export default memo(ChatMessages);
