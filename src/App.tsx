/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppNavigation} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MaterialYouThemeProvider} from './core/theme';
import {useGlobalStore} from './core/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

function App() {
  const customThemeColor = useGlobalStore(
    state => state.appSettings.customThemeColor,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <MaterialYouThemeProvider sourceColor={customThemeColor}>
          <SafeAreaProvider>
            <AppNavigation />
          </SafeAreaProvider>
        </MaterialYouThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
