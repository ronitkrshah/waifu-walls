/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PendingRequestModel from '../domain/models/PendingRequestModel';
import PendingRequestDTO from './PendingRequestDTO';

/** Transform `PendingRequestModel` to `PendingRequestDTO`*/
function transformToDto(request: PendingRequestModel): PendingRequestDTO {
  return {
    request_id: request.request_id,
    image_title: request.image_title,
    preview_url: request.preview_url,
    is_nsfw: request.is_nsfw,
    tags: request.tags,
    requested_user_name: request.requested_by.name,
    requested_user_id: request.requested_by.user_id,
    requested_user_email: request.requested_by.email,
    requested_on: request.requested_on,
    original_author: request.original_author,
    original_post_link: request.original_post_link,
  };
}

export default transformToDto;
