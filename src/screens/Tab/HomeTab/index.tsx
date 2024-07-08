import UploadImageFAB from '@app/components/common/UploadImageFAB';
import ShowWallpapers from '@app/components/screens/Tab/HomeTab/ShowWallpapers';
import AppHeader from '@app/components/shared/AppHeader';

function HomeTab() {
  return (
    <>
      <AppHeader title="Home" mode="medium" showVerticalDotsMenu />
      <ShowWallpapers />
      <UploadImageFAB />
    </>
  );
}

export default HomeTab;
