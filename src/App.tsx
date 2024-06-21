import {Provider} from 'react-redux';
import MaterialYouThemeProvider from './components/theme/MaterialYouThemeProvider';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MaterialYouThemeProvider>
          <RootNavigation />
        </MaterialYouThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
