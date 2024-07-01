import {useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native-paper';

type Props = {
  getImageData: (data: Asset) => void;
};

const {width} = Dimensions.get('window');

function ImagePreview({getImageData}: Props) {
  const [localImagePath, setLocalImagePath] = useState('');

  async function handleSelectImage() {
    try {
      const resp = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (resp.assets && resp.assets.length > 0) {
        const path = resp.assets[0].uri!;
        setLocalImagePath(path);
        getImageData(resp.assets[0]);
      }
    } catch (e) {
      // ... Ignore
    }
  }

  return (
    <View style={styles.container}>
      {localImagePath !== '' && (
        <Image
          resizeMode="contain"
          style={styles.previewImage}
          source={{uri: localImagePath}}
          width={width - 32}
          height={600}
        />
      )}
      <Button mode="contained-tonal" onPress={handleSelectImage}>
        Select Image
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 40,
    gap: 20,
  },
  previewImage: {
    borderRadius: 30,
  },
});

export default ImagePreview;
