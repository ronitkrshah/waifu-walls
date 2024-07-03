import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

type Props = {
  title: string;
};

function SettingsSectionHeadline({title}: Props) {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text variant="titleSmall" style={{color: colors.primary}}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default SettingsSectionHeadline;
