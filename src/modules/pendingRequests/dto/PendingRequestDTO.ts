/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type PendingRequestDTO = {
  request_id: string;
  image_title: string;
  preview_url: string;
  original_author?: string;
  original_post_link?: string;
  is_nsfw: boolean;
  tags: string[];
  requested_on: string;
  requested_user_id: string;
  requested_user_name: string;
  requested_user_email: string;
};

export default PendingRequestDTO;
