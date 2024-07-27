import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Container } from "@/theme/GlobalComponents";

const ChatMessagesSkeleton = () => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <Container backgroundColor="greyScale300" style={styles.container}>
      <Animated.View style={[styles.skeletonBox, { opacity }]} />
      <Animated.View style={[styles.skeletonBox, { opacity, width: '80%' }]} />
      <Animated.View style={[styles.skeletonBox, { opacity, width: '90%' }]} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
  },
  skeletonBox: {
    height: 20,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
    borderRadius: 4,
  },
});

export default ChatMessagesSkeleton;
