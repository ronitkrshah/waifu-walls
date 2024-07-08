import {useTheme} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UPIId from './UPIId';

function ShowDonationInfo() {
  const {colors} = useTheme();

  return (
    <>
      <MaterialIcons name="coffee" color={colors.onSurface} size={80} />
      <UPIId />
    </>
  );
}

export default ShowDonationInfo;
