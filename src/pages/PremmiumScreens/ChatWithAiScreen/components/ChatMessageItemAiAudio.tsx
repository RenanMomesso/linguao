import { Pressable, Alert, View } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { Column, Row } from "@/theme/GlobalComponents";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import AudioPlay from "@/components/AudioPlay/AudioPlay";
import Text from "@/components/Text";
import {
  CopyIcon,
  MenuIcon,
  SettingsIcon,
  TranslateIcon,
} from "@/assets/images";
import { Message } from "../../../../API";
import { theme } from "@/theme/theme";
import { formatDate } from "@/utils/formatDate";
import { useTranslator, TranslatorProvider } from "react-native-translator";
import translationText from "@/utils/translateText";
import { LoadingCircle } from "@/assets/json";
import LottieView from "lottie-react-native";
import Clipboard from "@react-native-clipboard/clipboard";

interface ChatMessageItemAiAudio {
  audioText: string;
  audioIsPlaying: boolean;
  handleLongPress?: () => void;
  setPlayAudio: () => void;
  audioPath: string;
  avatarUrlAi: string;
  createdAt: string;
  selectedItem: Message;
  id: string;
}
const ChatMessageItemAiAudio = ({
  handleLongPress,
  audioPath,
  createdAt,
  avatarUrlAi,
  audioText,
  selectedItem,
  id,
}: ChatMessageItemAiAudio) => {
  const [translateText, setTranslateText] = useState("");
  const [copyText, setCopyText] = useState("");
  const [loadingTranslation, setLoadingTranslation] = useState(false);

  const handleTranslateText = useCallback(async () => {
    setLoadingTranslation(true);
    const res = await translationText(audioText, "pt");
    setTranslateText(previousState => (previousState === "" ? res : ""));
    setLoadingTranslation(false);
  }, [audioText, translateText, loadingTranslation]);

  const handleCopyText = () => {
    Clipboard.setString(!!translateText.length ? translateText : audioText);
    setCopyText(!!translateText.length ? translateText : audioText);
  };

  return (
    <View
      style={{
        padding: 8,
      }}>
      {selectedItem.transcribe && selectedItem.id === id && (
        <View
          style={{
            padding: 6,
            zIndex: 5,
            backgroundColor: theme.colors.Purple,
            marginBottom: 30,
            borderRadius: 8,
            elevation: 2,
          }}>
          <Text align="left" size="text" weight="semibold">
            {!!translateText.length ? translateText : audioText}
          </Text>
          {loadingTranslation && (
            <LottieView
              source={LoadingCircle}
              autoPlay
              loop
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            />
          )}

          <Pressable
            style={{
              position: "absolute",
              right: -10,
              bottom: -20,
              elevation: 2,
              padding: 6,
              borderRadius: 50,
              backgroundColor: "white",
            }}>
            <CopyIcon onPress={handleCopyText} width={20} height={20} />
          </Pressable>
          <Pressable
            style={{
              position: "absolute",
              right: 25,
              bottom: -20,
              elevation: 2,
              padding: 6,
              borderRadius: 50,
              backgroundColor: "white",
            }}>
            <TranslateIcon
              onPress={handleTranslateText}
              width={20}
              height={20}
            />
          </Pressable>
        </View>
      )}
      <Pressable onLongPress={handleLongPress} style={{ zIndex: 1, gap: 10 }}>
        <Row
          style={{
            borderRadius: 12,
            alignSelf: "flex-start",
            width: 300,
            gap: 4,
            maxHeight: 40,
          }}>
          <View
            style={{ position: "absolute", zIndex: 22, top: -25, left: -12 }}>
            <Avatar size="small" avatarUrl={avatarUrlAi} />
          </View>
          <AudioPlay audioPath={audioPath} />
          <Pressable
            onPress={handleLongPress}
            style={{
              backgroundColor: theme.colors.primary,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              position: "absolute",
              right: -25,
              bottom: -20,
              zIndex: 3,
              elevation: 6,
            }}>
            <MenuIcon color="white" width={15} height={15} />
          </Pressable>
        </Row>
      </Pressable>
      <Text size="tiny" weight="light" align="left" style={{ marginTop: 4 }}>
        {formatDate(createdAt)}
      </Text>
    </View>
  );
};

export default ChatMessageItemAiAudio;
