import {PaperProvider} from 'react-native-paper';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
