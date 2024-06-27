import { View, Text } from "react-native";
import React, { memo } from "react";
import { Row } from "@/theme/GlobalComponents";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import { theme } from "@/theme/theme";
import { speakerVoiceMessage } from "@/utils/speakerVoice";

export type Size = "small" | "medium" | "large";

const GenerateBars = memo(({ size = "medium" }: { size: Size }) => {
  let bars = [];
  let sizeNumber = size === "small" ? 15 : size === "medium" ? 25 : 20;
  for (let i = 0; i < sizeNumber; i++) {
    bars.push({
      x: i * 10,
      height: Math.random() * 15 + 10,
      backgroundColor: theme.colors.greyScale900,
    });
  }
  
  return (
    <Row style={{ gap: 3, width: "100%" }}>
      {bars.map(bar => {
        return (
          <View
            key={bar.x}
            style={{
              width: 2,
              height: bar.height,
              backgroundColor: bar.backgroundColor,
            }}
          />
        );
      })}
    </Row>
  );
});

interface SpeakerWithBarsProps {
  sentence?: string;
  size?: Size;
}
const SpeakerWithBars = ({
  sentence,
  size = "medium",
}: SpeakerWithBarsProps) => {
  if (!sentence) return null;
  return (
    <Row
      style={{
        width: "100%",
        padding: 4,
        borderRadius: 12,
        borderColor: theme.colors.primary200,
        backgroundColor: theme.colors.primary100,
        
      }}>
      <SpeakerButton
        size={size}
        soundPlaying={false}
        handleSpeak={() => {
          speakerVoiceMessage(sentence);
        }}
      />
      <GenerateBars size={size} />
    </Row>
  );
};

export default SpeakerWithBars;
