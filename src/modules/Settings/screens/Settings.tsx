/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ScrollView} from 'react-native';
import {AdultSection, AppearanceSection} from '../sections';

function Settings() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppearanceSection />
      <AdultSection />
    </ScrollView>
  );
}

export default Settings;
