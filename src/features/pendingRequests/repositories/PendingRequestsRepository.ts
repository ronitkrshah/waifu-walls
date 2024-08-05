/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {pendingRequestsDummyData} from '@app/dummy_data';
import PendingRequestsRepository from '../domain/repositories/PendingRequestsRepository';
import PendingRequestModel from '../domain/models/PendingRequestModel';

class PendingRequestsRepositoryImpl implements PendingRequestsRepository {
  public async getPendingRequests() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(pendingRequestsDummyData);
      }, 2500);
    });
    return response as PendingRequestModel[];
  }

  public async approveRequest(requestId: string): Promise<void> {}

  public async rejectRequest(requestId: string): Promise<void> {}
}

export default PendingRequestsRepositoryImpl;
