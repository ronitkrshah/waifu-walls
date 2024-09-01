/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PendingRequestsRepository from '../domain/repositories/PendingRequestsRepository';
import PendingRequestDTO from '../dto/PendingRequestDTO';
import transformToDto from '../dto/transform';

class PendingRequestService {
  private repo: PendingRequestsRepository;

  constructor(repo: PendingRequestsRepository) {
    this.repo = repo;
  }

  public async getPendingRequests() {
    const data = await this.repo.getPendingRequests();
    return data.map(item => transformToDto(item));
  }
}

export default PendingRequestService;
