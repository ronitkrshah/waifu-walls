import {Provider} from 'react-redux';
import MaterialYouThemeProvider from './components/theme/MaterialYouThemeProvider';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './store/store';

function App() {
  return (
    <MaterialYouThemeProvider fallbackSourceColor="#756FAB">
      <Provider store={store}>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </Provider>
    </MaterialYouThemeProvider>
  );
}

export default App;
