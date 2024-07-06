import UploadImageFAB from '@app/components/common/UploadImageFAB';
import ShowWallpapers from '@app/components/screens/Tab/HomeScreen/ShowWallpapers';
import AppHeader from '@app/components/shared/AppHeader';

function HomeScreen() {
  return (
    <>
      <AppHeader title="Home" mode="medium" />
      <ShowWallpapers />
      <UploadImageFAB />
    </>
  );
}

export default HomeScreen;
