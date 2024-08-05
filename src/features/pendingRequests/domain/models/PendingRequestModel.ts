/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type PendingRequestModel = {
  request_id: string;
  image_title: string;
  preview_url: string;
  original_author?: string;
  original_post_link?: string;
  is_nsfw: boolean;
  tags: string[];
  requested_on: string; // Date
  requested_by: {
    user_id: string;
    name: string;
    email: string;
  };
};

export default PendingRequestModel;
