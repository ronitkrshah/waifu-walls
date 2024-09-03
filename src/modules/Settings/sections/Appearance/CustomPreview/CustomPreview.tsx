/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useCustomPreview from './useCustomPreview';
import {Fragment, useState} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {SwitchButtonTile} from '@core/components/shared';

function CustomPreview() {
  const [showTipDialog, setShowTipDialog] = useState(false);
  const {handleOnChange, isSwitchEnabled} =
    useCustomPreview();

  /** Hide Tip dialog */
  function dismissTipDialog() {
    setShowTipDialog(false);
  }

  /** Handle Switch Toggle */
  function handleSwtichChange(value: boolean) {
    value && setShowTipDialog(true);
    handleOnChange(value);
  }

  return (
    <Fragment>
      <SwitchButtonTile
        title="Animated Waifu Preview"
        description="Use Accelerometer to animate Waifu on preview screen"
        leftIcon="animation"
        isSwitchEnabled={isSwitchEnabled}
        onPress={handleSwtichChange}
      />

      {/** Show Tip on how to use Animated Preview Screen */}
      <Portal>
        <Dialog visible={showTipDialog} onDismiss={dismissTipDialog}>
          <Dialog.Title>Tip</Dialog.Title>
          <Dialog.Content>
            <Tip title="Like" description="Double Tap on Image" />
            <Tip
              title="Apply & Download"
              description="Double Tap on background blurred Image"
            />
            <Tip
              title="Wallpaper Information"
              description="Tap and Hold anywhere"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={dismissTipDialog}>Okay</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Fragment>
  );
}

/** Tip Text */
type TipProps = {
  title: string;
  description: string;
};

function Tip({title, description}: TipProps) {
  return (
    <Fragment>
      <Text variant="titleMedium" style={styles.tipTitle}>
        {title}:
      </Text>
      <Text>{description}</Text>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  tipTitle: {
    fontWeight: 'bold',
    marginTop: 12,
  },
});

export default CustomPreview;
