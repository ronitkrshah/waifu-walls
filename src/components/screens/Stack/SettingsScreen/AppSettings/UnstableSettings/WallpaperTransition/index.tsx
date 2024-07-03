import AppRestartDialog from '@app/components/shared/AppRestartDialog';
import SettingsSwitchButton from '@app/components/shared/SettingSwitchButton';
import {updateAppSettingsGlobalStore} from '@app/store/reducers/settingsReducer';
import {GlobalStoreRootState} from '@app/store/store';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function WallpaperTransition() {
  const [showDialog, setShowDialog] = useState(false);
  const settings = useSelector((state: GlobalStoreRootState) => state.settings);

  const dispatch = useDispatch();
  function handleChange(value: boolean) {
    setShowDialog(true);
    dispatch(
      updateAppSettingsGlobalStore({
        ...settings,
        unstableSettings: {wallpaperTransition: value},
      }),
    );
  }

  return (
    <>
      <SettingsSwitchButton
        title="Wallpaper Transition"
        description="Add transition while changing screens"
        defaultValue={settings.unstableSettings.wallpaperTransition}
        onPress={handleChange}
      />
      <AppRestartDialog visible={showDialog} />
    </>
  );
}

export default WallpaperTransition;
