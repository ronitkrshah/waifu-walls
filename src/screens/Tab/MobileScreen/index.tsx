import UploadImageFAB from '@app/components/common/UploadImageFAB';
import ShowWallpapers from '@app/components/screens/Tab/MobileScreen/ShowWallpapers';
import AppHeader from '@app/components/shared/AppHeader';

function MobileScreen() {
  return (
    <>
      <AppHeader title="Mobile" />
      <ShowWallpapers />
      <UploadImageFAB />
    </>
  );
}

export default MobileScreen;
