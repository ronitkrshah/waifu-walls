/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const enum AppSettingsType {
  SWITCH,
}

type AppSettings = {
  id: string;
  type: AppSettingsType;
  title: string;
  subtitle: string;
  disabled: boolean;
  isEnabled: boolean;
  onPress(): Promise<void> | void;
};

export default AppSettings;
