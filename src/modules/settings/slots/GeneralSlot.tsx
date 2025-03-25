import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SettingsSection } from "./general";

export default function GeneralSlot() {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <SettingsSection.CachingSection />
    </Animated.View>
  );
}
