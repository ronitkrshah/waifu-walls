/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useMutation, useQuery} from '@tanstack/react-query';
import AdminControlService from '../services/AdminControlService';
import {useEffect, useState} from 'react';
import AdminControlRepositoryImpl from '../repositories/AdminControlRepositoryImpl';
import {ToastAndroid} from 'react-native';
import {AppwriteException} from 'react-native-appwrite';

function useAdminControlController() {
  const [isUploadImageFeatureEnabled, setIsUploadImageFeatureEnabled] =
    useState(false);
  const service = new AdminControlService(new AdminControlRepositoryImpl());

  const {data, isLoading} = useQuery({
    queryKey: ['adminControlConfig'],
    queryFn: () => service.getConfig(),
    refetchOnMount: 'always',
  });

  const setUploadImageMutation = useMutation({
    mutationFn: (value: boolean) => service.setImageUploadFeature(value),
    onSuccess: () => {
      ToastAndroid.show('Changes Updated Successfully.', ToastAndroid.SHORT);
    },
    onError: error => {
      if (error instanceof AppwriteException) {
        error.code === 401 &&
          ToastAndroid.show('You are not authorized!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
      setIsUploadImageFeatureEnabled(prevValue => prevValue);
    },
  });

  /** Change Image Upload Settings */
  function changeUploadImageFeature(value: boolean) {
    setUploadImageMutation.mutate(value);
  }

  useEffect(() => {
    if (data) {
      setIsUploadImageFeatureEnabled(data.shouldUploadImages);
    }
  }, [data]);

  return {
    isLoadingSettings: isLoading,
    isUploadImageFeatureEnabled,
    isUpdatingUploadImageFeatureSetting: setUploadImageMutation.isPending,
    setUploadImageFeature: (value: boolean) => changeUploadImageFeature(value),
  };
}

export default useAdminControlController;
