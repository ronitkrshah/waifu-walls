import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityLoaderProvider } from "~/components";
import { initializeDatabase, initialzeTables } from "~/database";
import { RootNavigation } from "~/navigation";
import { NotificationService } from "~/services";
import { MaterialYouThemeProvider } from "~/theme";
import * as Notifications from "expo-notifications"

initializeDatabase().then(initialzeTables);
NotificationService.setup();

function App() {

  useEffect(() => {
    Notifications.getPermissionsAsync().then(status => {
      if(!status.granted) {
        status.canAskAgain && Notifications.requestPermissionsAsync()
      }
    })
  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <MaterialYouThemeProvider>
          <ActivityLoaderProvider>
            <RootNavigation />
          </ActivityLoaderProvider>
        </MaterialYouThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
