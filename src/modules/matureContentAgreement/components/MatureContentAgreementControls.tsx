/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Fragment} from 'react';
import MatureContentCheckBox from './MatureContentCheckBox';
import {DefaultStrings} from '@app/utils/constants/strings';
import useMatureContentAgreementController from '../controllers/useMatureContentAgreementController';
import {Button} from 'react-native-paper';

function MatureContentAgreementControls() {
  const {
    isMatured,
    toggleIsMatured,
    acceptedTOC,
    toggleAcceptedTOC,
    handleProceed,
    handlePressReadTOC,
  } = useMatureContentAgreementController();

  return (
    <Fragment>
      <MatureContentCheckBox
        label={DefaultStrings.MATURE_CONTENT_ACKNOWLEDGEMENT}
        isChecked={isMatured}
        onPress={toggleIsMatured}
      />

      <MatureContentCheckBox
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
