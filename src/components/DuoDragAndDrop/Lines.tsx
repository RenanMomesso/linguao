import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "./colors";
import { theme } from "@/theme/theme";

interface LinesProps {
  numLines: number;
  containerHeight: number;
  lineHeight: number;
  lineStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  renderTopLine?: boolean;
}

export default function Lines(props: LinesProps) {
  const { containerHeight, containerStyle, numLines, lineHeight, lineStyle, renderTopLine = false } = props;
  const arr = new Array(numLines).fill(0);

  return (
    <View style={[{ height: containerHeight }, containerStyle]}>
      {arr.map((_, idx) => (
        <View
          key={`line.${idx}`}
          style={[{ height: lineHeight }, styles.line, idx === 0 && renderTopLine && styles.firstLine, lineStyle]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  line: { borderBottomWidth: 1, borderBottomColor: theme.colors.greyScale200 },
  firstLine: { borderTopWidth: 0, borderTopColor: colors.grey },
});
