import UploadImageFAB from '@app/components/common/UploadImageFAB';
import ShowWallpapers from '@app/components/screens/Stack/HomeScreen/ShowWallpapers';
import AppHeader from '@app/components/shared/AppHeader';

function HomeScreen() {
  return (
    <>
      <AppHeader title="Mobile" />
      <ShowWallpapers />
      <UploadImageFAB />
    </>
  );
}

export default HomeScreen;
