import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {StyleSheet, View} from 'react-native';
import UploadButton from './UploadButton';
import {useRef} from 'react';
import {Asset} from 'react-native-image-picker';

type Props = {
  imageData?: Asset;
};

function ImageFields({imageData}: Props) {
  const titleRef = useRef<InputBoxRef>(null);

  function getValues() {
    return {
      imageTitle: titleRef.current?.getValue()!,
      ...imageData,
    };
  }

  return (
    <View style={styles.container}>
      <InputBox ref={titleRef} placeholder="Enter Image Title" />
      <UploadButton getData={getValues} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  inputOutline: {
    borderRadius: 5,
  },
});

export default ImageFields;
