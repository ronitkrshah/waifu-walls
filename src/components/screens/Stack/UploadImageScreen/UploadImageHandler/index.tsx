import {ScrollView, StyleSheet} from 'react-native';
import Headline from './Headline';
import ImageDetails from './ImageDetails';

function UploadImageHandler() {
  return (
    <>
      <Headline />
      <ScrollView contentContainerStyle={styles.container}>
        <ImageDetails />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default UploadImageHandler;
