import 'react-native-reanimated';
import {Provider} from 'react-redux';
import MaterialYouThemeProvider from './components/theme/MaterialYouThemeProvider';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

function App() {
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <MaterialYouThemeProvider>
        <Provider store={store}>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </Provider>
      </MaterialYouThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});

export default App;
