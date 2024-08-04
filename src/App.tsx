/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppNavigation from './navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MaterialYouThemeProvider from './theme/MaterialYouTheme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MaterialYouThemeProvider>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </MaterialYouThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
