/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Fragment} from 'react';
import CheckBox from './CheckBox';
import {DefaultStrings} from '@core/constants';
import {useAgreement} from '../hooks';
import {Button} from 'react-native-paper';

function MatureContentAgreementControls() {
  const {
    isMatured,
    toggleIsMatured,
    acceptedTOC,
    toggleAcceptedTOC,
    handleProceed,
    handlePressReadTOC,
  } = useAgreement();

  return (
    <Fragment>
      <CheckBox
        label={DefaultStrings.MATURE_CONTENT_ACKNOWLEDGEMENT}
        isChecked={isMatured}
        onPress={toggleIsMatured}
      />

      <CheckBox
        label={'I agree to the terms and conditions.'}
        isChecked={acceptedTOC}
        onPress={toggleAcceptedTOC}
      />

      <Button onPress={handlePressReadTOC}>Read Terms And Conditions</Button>
      <Button
        onPress={handleProceed}
        mode="contained"
        disabled={!isMatured || !acceptedTOC}>
        Proceed
      </Button>
    </Fragment>
  );
}

export default MatureContentAgreementControls;
