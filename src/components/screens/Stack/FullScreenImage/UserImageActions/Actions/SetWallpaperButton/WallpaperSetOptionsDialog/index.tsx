import {Dispatch, SetStateAction} from 'react';
import {Dialog, Portal} from 'react-native-paper';
import WallpaperSetOptionsHeader from './WallpaperSetOptionsHeader';
import WallpaperSetOptionsActions from './WallpaperSetOptionsActions';

type Props = {
  url: string;
  visible: boolean;
  setVisble: Dispatch<SetStateAction<boolean>>;
};

function WallpaperSetOptionsDialog({setVisble, visible, url}: Props) {
  function dismissDialog() {
    setVisble(false);
  }
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={dismissDialog}>
        <Dialog.Content>
          <WallpaperSetOptionsHeader />
          <WallpaperSetOptionsActions url={url} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

export default WallpaperSetOptionsDialog;
