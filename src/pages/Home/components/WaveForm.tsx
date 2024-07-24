import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import styled from "styled-components/native";

import { PauseIcon, PlayIcon } from "@/assets/images";
import Text from "@/components/Text";
import { theme } from "@/theme/theme";

const { width } = Dimensions.get("window");
const adjustedWidth = width - 150;
const audioRecorderPlayer = new AudioRecorderPlayer();

interface WaveformProps {
  audioPath: string;
  duration?: number | null | string;
  audioLength: number;
}

const calculatePercentage = (current: number, total: number) => {
  return total > 0 ? ((current / total) * 100).toFixed(2) : "0.00";
};

const calculateLeftPosition = (percentage: number) => {
  "worklet";
  return (percentage / 100) * (adjustedWidth - 12);
};

const Waveform: React.FC<WaveformProps> = ({ audioPath, audioLength = 0 }) => {
  const AnimatedIndicator = Animated.createAnimatedComponent(WaveformThumb);
  const progress = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pausedPosition, setPausedPosition] = useState(0);

  useEffect(() => {
    return () => {
      audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(calculateLeftPosition(progress.value * 100)),
  }));

  const startPlaying = async () => {
    setIsPlaying(true);
    const result = await audioRecorderPlayer.startPlayer(audioPath);
    console.log("🚀 ~ startPlaying ~ result:", result);
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentTime(e.currentPosition);
      setDuration(e.duration);
      progress.value = e.currentPosition / e.duration;
      if (e.currentPosition === e.duration) {
        setIsPlaying(false);
        audioRecorderPlayer.stopPlayer();
      }
    });
  };

  const getDuration = async () => {
    const duration = await audioRecorderPlayer.mmss(audioPath);

    setDuration(duration);
  };

  const stopPlaying = async () => {
    setIsPlaying(false);
    await audioRecorderPlayer.pausePlayer();
    setPausedPosition(currentTime);
  };

  const resumePlaying = async () => {
    setIsPlaying(true);
    await audioRecorderPlayer.resumePlayer();
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      stopPlaying();
    } else {
      if (pausedPosition > 0) {
        resumePlaying();
      } else {
        startPlaying();
      }
    }
  };

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Container>
      {isPlaying ? (
        <PauseIcon
          color={theme.colors.greyScale800}
          onPress={handlePlayPause}
          height={25}
          width={25}
        />
      ) : (
        <PlayIcon
          color={theme.colors.greyScale800}
          onPress={handlePlayPause}
          height={25}
          width={25}
        />
      )}
      <WaveformContainer>
        <WaveformTrack />
        <AnimatedIndicator style={animatedIndicatorStyle} />
      </WaveformContainer>
      <TimeText
        size="text"
        style={{
          position: "absolute",
          top: "100%",
        }}>
        {formatTime(currentTime)}
      </TimeText>
    </Container>
  );
};

export default Waveform;

const Container = styled.View`
  align-items: center;
  background-color: lightgreen;
  flex-direction: row;
  elevation: 6;
  gap: 6px;
  padding: 12px;
  border-radius: 18px;
`;

const WaveformContainer = styled.View`
  height: 20px;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

const WaveformTrack = styled.View`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.greyScale800};
`;

const WaveformThumb = styled(Animated.View)`
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.greyScale800};
  position: absolute;
  aspect-ratio: 2;
`;

const TimeText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.greyScale800};
  right: 10px;
`;
