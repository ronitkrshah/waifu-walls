import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Text, useTheme } from "react-native-paper";

type TProps = {
  title: string;
} & PropsWithChildren;

export default function SectionBase({ children, title }: TProps) {
  const theme = useTheme();

  return (
    <Surface mode="flat" style={styles.surface}>
      <View style={{ marginBottom: 16 }}>
        <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
          {title}
        </Text>
      </View>
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    borderRadius: 16,
    padding: 16,
  },
});
