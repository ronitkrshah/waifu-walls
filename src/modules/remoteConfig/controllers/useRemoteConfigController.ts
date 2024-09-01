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
import useGlobalStore from '@app/store';

function useRemoteConfigController() {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const service = new RemoteConfigService(new RemoteConfigRepositoryImpl());
  const setShouldUploadImages = useGlobalStore(
    state => state.setShouldUploadImages,
  );

  const {isLoading, data} = useQuery({
    queryKey: ['remoteConfig'],
    queryFn: () => service.getConfig(),
    staleTime: 1800000, // 30 Mins
  });

  function onUpdatePress() {
    Linking.openURL(DefaultStrings.GITHUB_REPO_LINK + '/releases');
  }

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (data) {
      data.version !== DeviceInfo.getVersion() && setShowUpdateDialog(true);
      setShouldUploadImages(data.shouldUploadImages);
    }
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    onUpdatePress,
    showUpdateDialog,
    hideUpdateDialog: () => setShowUpdateDialog(false),
  };
}

export default useRemoteConfigController;
