// Waveform.tsx
import React, { useState, useEffect } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import Svg, { Rect } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { theme } from "@/theme/theme"; 
import Slider from "@react-native-community/slider";

const { width } = Dimensions.get("window");
const AnimatedRect = Animated.createAnimatedComponent(Rect);

const audioRecorderPlayer = new AudioRecorderPlayer();

const generateBars = (barCount: number) => {
  const bars = [];
  const barWidth = width  / barCount;
  for (let i = 0; i < barCount; i++) {
    bars.push({
      x: i * barWidth,
      height: Math.random() * 100 + 20,
      width: barWidth - 2,
    });
  }
  return bars;
};

const Waveform = ({ audioPath }: { audioPath: string }) => {
  const [bars, setBars] = useState(generateBars(50));
  const progress = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const animatedProps = useAnimatedProps(() => ({
    width: progress.value * width,
  }));

  const startPlaying = async () => {
    setIsPlaying(true);
    const result = await audioRecorderPlayer.startPlayer(audioPath);
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

  const stopPlaying = async () => {
    setIsPlaying(false);
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const seekAudio = async (value: number) => {
    const seekTime = value * duration;
    await audioRecorderPlayer.seekToPlayer(seekTime);
    setCurrentTime(seekTime);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Svg height="200" width={400}>
        {bars.map((bar, index) => (
          <Rect
            key={index}
            x={bar.x}
            y={200 - bar.height}
            width={bar.width}
            height={bar.height}
            fill="black"
          />
        ))}
        <AnimatedRect
          x={0}
          y={0}
          height={200}
          fill={theme.colors.primary}
          animatedProps={animatedProps}
        />
      </Svg>
      <TouchableOpacity
        onPress={isPlaying ? stopPlaying : startPlaying}
        style={{ marginTop: 20, backgroundColor: "red" }}>
        <Text style={{ fontSize: 18, color: theme.colors.primary }}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>
      <Slider
        style={{ width: width * 0.8, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={progress.value}
        onSlidingComplete={seekAudio}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: theme.colors.greyScale900,
        }}>
        {new Date(currentTime).toISOString().substr(14, 5)} / {new Date(duration).toISOString().substr(14, 5)}
      </Text>
    </View>
  );
};

export default Waveform;
