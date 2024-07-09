import {Linking, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

const TOS_LINK = 'https://github.com/ronitkrshah/waifu-walls/blob/main/TOS.md';
const PRIVACY_POLICY_LINK =
  'https://github.com/ronitkrshah/waifu-walls/blob/main/privacy_policy.md';

function AgreementLinks() {
  const {colors} = useTheme();

  function handlePress(openTOS: boolean) {
    return function () {
      if (openTOS) {
        Linking.openURL(TOS_LINK);
      } else {
        Linking.openURL(PRIVACY_POLICY_LINK);
      }
    };
  }

  return (
    <View style={styles.container}>
      <Text>By using our app, you agreeing to our</Text>
      <Text
        onPress={handlePress(true)}
        style={{color: colors.primary, ...styles.link}}>
        Terms Of Service
      </Text>
      <Text>and</Text>
      <Text
        onPress={handlePress(false)}
        style={{color: colors.primary, ...styles.link}}>
        Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'center',
    marginVertical: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default AgreementLinks;
