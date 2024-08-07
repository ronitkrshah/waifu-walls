/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PendingRequestModel from '../models/PendingRequestModel';

interface PendingRequestsRepository {
  getPendingRequests(): Promise<PendingRequestModel[]>;
  rejectRequest(requestId: string): Promise<void>;
  approveRequest(requestId: string): Promise<void>;
}

export default PendingRequestsRepository;
