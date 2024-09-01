/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ScrollView} from 'react-native';
import AdultSettingsSection from '../settings/adultSettings/AdultSettingsSection';
import AppearanceSettingsSection from '../settings/appearanceSettings/AppearanceSettingsSection';

function AppSettingsFeature() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppearanceSettingsSection />
      <AdultSettingsSection />
    </ScrollView>
  );
}

export default AppSettingsFeature;
