import React, { useState } from "react";
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

const { width } = Dimensions.get("window");
const adjustedWidth = width - 100;
const audioRecorderPlayer = new AudioRecorderPlayer();

interface WaveformProps {
  audioPath: string;
  duration: number | null | string;
}

const calculatePercentage = (current: number, total: number) => {
  'worklet'
  return total > 0 ? ((current / total) * 100).toFixed(2) : "0.00";
};

const calculateLeftPosition = (percentage: number) => {
  'worklet'
  return (percentage / 100) * adjustedWidth;
};

const Waveform: React.FC<WaveformProps> = ({ audioPath }) => {
  const AnimatedIndicator = Animated.createAnimatedComponent(WaveformThumb);
  const progress = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pausedPosition, setPausedPosition] = useState(0);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(calculateLeftPosition(progress.value * 100)),
  }));

  const startPlaying = async () => {
    setIsPlaying(true);
    const result = await audioRecorderPlayer.startPlayer(audioPath);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setCurrentTime(e.currentPosition);
      setDuration(e.duration);
      progress.value = e.currentPosition / e.duration;
      if (e.currentPosition === e.duration) {
        setIsPlaying(false);
        audioRecorderPlayer.stopPlayer();
      }
    });
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

  const seekAudio = async (value: number) => {
    const seekTime = value * duration;
    await audioRecorderPlayer.seekToPlayer(seekTime);
    setCurrentTime(seekTime);
  };

  console.log("🚀 ~ Waveform ~ audioPath:", audioPath);
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <Container>
      {isPlaying ? (
        <PauseIcon onPress={handlePlayPause} height={25} width={25} />
      ) : (
        <PlayIcon onPress={handlePlayPause} />
      )}
      <WaveformContainer>
        <WaveformTrack />
        <AnimatedIndicator style={animatedIndicatorStyle} />
        <TimeText
          size="text"
          style={{
            position: "absolute",
            right: 0,
            top: 22,
          }}
        >
         {formatTime(currentTime)} / {formatTime(duration)}
        </TimeText>
      </WaveformContainer>
    </Container>
  );
};

export default Waveform;

const Container = styled.View`
  align-items: center;
  background-color: white;
  flex-direction: row;
  elevation: 6;
  gap: 6px;
  padding: 12px;
  border-radius: 8px;
`;

const WaveformContainer = styled.View`
  height: 30px;
  flex: 1;
  justify-content: center;
`;

const WaveformTrack = styled.View`
  height: 3px;
  background-color: gainsboro;
`;

const WaveformThumb = styled(Animated.View)`
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background-color: royalblue;
  position: absolute;
  aspect-ratio: 2;
`;

const TimeText = styled(Text)`
  font-size: 12px;
  color: black;
`;
