import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {List, Switch, useTheme} from 'react-native-paper';

type Props = {
  title: string;
  description?: string;
  defaultValue: boolean;
  onPress: (value: boolean) => void;
};

function SettingsSwitchButton({
  onPress,
  title,
  description,
  defaultValue,
}: Props) {
  const [isEnabled, setIsEnabled] = useState(defaultValue);
  const {colors} = useTheme();

  function handleChange() {
    setIsEnabled((p) => {
      onPress(!p);
      return !p;
    });
  }

  return (
    <>
      <List.Item
        onPress={handleChange}
        right={() => (
          <Switch
            style={styles.switchBtn}
            value={isEnabled}
            onValueChange={handleChange}
          />
        )}
        title={title}
        description={description}
        descriptionStyle={{color: colors.onSurfaceDisabled}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  switchBtn: {
    paddingHorizontal: 10,
  },
});

export default SettingsSwitchButton;
