/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type Props = {
  title: string;
  original_author?: string;
  original_post_link?: string;
};

function UploadWallpaperTextValidations(props: Props) {
  if (props.original_post_link && props.original_post_link.length > 249) {
    throw new Error('Post Link Must Be Within 250 Characters');
  }
  if (props.title.length < 2) {
    throw new Error('Title Is Required!');
  }
  if (props.title.length > 19) {
    throw new Error('Title Must Be Within 20 Characters');
  }
  if (props.original_author && props.original_author.length > 19) {
    throw new Error('Author Name Must Be Within 20 Characters');
  }
}

export default UploadWallpaperTextValidations;
