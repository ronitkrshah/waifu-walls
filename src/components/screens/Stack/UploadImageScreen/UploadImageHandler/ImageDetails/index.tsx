import {useState} from 'react';
import ImagePreview from './ImagePreview';
import ImageFields from './ImageFields';

function ImageDetails() {
  const [imagePath, setImagePath] = useState('');

  function getImagePath(path: string) {
    setImagePath(path);
  }

  return (
    <>
      <ImagePreview getImagePath={getImagePath} />
      <ImageFields imagePath={imagePath} />
    </>
  );
}

export default ImageDetails;
