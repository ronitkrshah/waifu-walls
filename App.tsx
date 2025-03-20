import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initializeDatabase, initialzeTables } from "~/database";
import { RootNavigation } from "~/navigation";
import { NotificationService } from "~/services";
import { MaterialYouThemeProvider } from "~/theme";

initializeDatabase().then(initialzeTables);
NotificationService.setup();

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <MaterialYouThemeProvider>
          <RootNavigation />
        </MaterialYouThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
