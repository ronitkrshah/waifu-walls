import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {ICON_BTN_ANIMATION_DURATION} from '@app/constants';

const AIconButton = Animated.createAnimatedComponent(IconButton);

function GoBackButton() {
  const navigation = useNavigation<TUseNavigation>();
  async function onPress() {
    navigation.goBack();
  }

  return (
    <AIconButton
      animated
      entering={ZoomIn.delay(ICON_BTN_ANIMATION_DURATION * 2).springify()}
      onPress={onPress}
      icon={'window-close'}
      size={40}
      mode="contained-tonal"
    />
  );
}

export default GoBackButton;
