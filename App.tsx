import { PaperProvider, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "~/navigation";

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
