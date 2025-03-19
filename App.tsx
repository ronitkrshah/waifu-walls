import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "~/navigation";

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
