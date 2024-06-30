import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {StyleSheet, View} from 'react-native';
import UploadButton from './UploadButton';
import {useRef} from 'react';

type Props = {
  imagePath: string;
};

function ImageFields({imagePath}: Props) {
  const titleRef = useRef<InputBoxRef>(null);

  function getValues() {
    return {
      imageTitle: titleRef.current?.getValue()!,
      imagePath,
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
