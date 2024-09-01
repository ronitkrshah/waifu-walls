/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useQuery} from '@tanstack/react-query';
import PendingRequestsRepositoryImpl from '../repositories/PendingRequestsRepository';
import PendingRequestService from '../services/PendingRequestService';

function usePendingRequestsFeatureController() {
  const service = new PendingRequestService(
    new PendingRequestsRepositoryImpl(),
  );
  const requestsQuery = useQuery({
    queryKey: ['pendingRequests'],
    queryFn: () => service.getPendingRequests(),
  });

  return {
    isLoading: requestsQuery.isLoading,
    isError: requestsQuery.isError,
    requests: requestsQuery.data,
  };
}

export default usePendingRequestsFeatureController;
