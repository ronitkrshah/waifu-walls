import ImagePreview from './ImagePreview';
import ImageFields from './ImageFields';
import {Asset} from 'react-native-image-picker';
import {useState} from 'react';

function ImageDetails() {
  const [imageData, setImageData] = useState<Asset | undefined>(undefined);

  function getImageData(data: Asset) {
    setImageData(data);
  }
  return (
    <>
      <ImagePreview getImageData={getImageData} />
      <ImageFields imageData={imageData} />
    </>
  );
}

export default ImageDetails;
