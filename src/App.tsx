import MaterialYouThemeProvider from './components/theme/MaterialYouThemeProvider';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <MaterialYouThemeProvider>
        <RootNavigation />
      </MaterialYouThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
