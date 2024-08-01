/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {PaperProvider} from 'react-native-paper';
import AppNavigation from './navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
