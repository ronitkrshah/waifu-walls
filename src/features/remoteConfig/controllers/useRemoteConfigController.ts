/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStrings} from '@app/utils/constants/strings';
import {useQuery} from '@tanstack/react-query';
import {Linking} from 'react-native';
import RemoteConfigService from '../services/RemoteConfigService';
import RemoteConfigRepositoryImpl from '../repositories/RemoteConfigRepositoryImpl';
import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

function useRemoteConfigController() {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const service = new RemoteConfigService(new RemoteConfigRepositoryImpl());

  const {isLoading, data} = useQuery({
    queryKey: ['remoteConfig'],
    queryFn: () => service.getConfig(),
    refetchOnMount: false,
  });

  function onUpdatePress() {
    Linking.openURL(DefaultStrings.GITHUB_REPO_LINK + '/releases');
  }

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (data) {
      const isUpdateAvilable = data.version !== DeviceInfo.getVersion();

      if (isUpdateAvilable) {
        setShowUpdateDialog(true);
      }
    }
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    onUpdatePress,
    showUpdateDialog,
  };
}

export default useRemoteConfigController;
