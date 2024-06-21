import {Ref, forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from 'react-native-paper';

export type InputBoxRef = {
  getValue: () => string;
  setValue: (value: string) => void;
};

function InputBox(props: TextInputProps, ref: Ref<InputBoxRef>) {
  const [text, setText] = useState(props.defaultValue || '');
  const {colors} = useTheme();

  useImperativeHandle(ref, () => ({
    getValue() {
      return text;
    },
    setValue(value) {
      setText(value);
    },
  }));

  return (
    <TextInput
      {...props}
      defaultValue={props.defaultValue}
      onChangeText={setText}
      cursorColor={colors.primary}
      placeholderTextColor={'gray'}
      style={{
        ...styles.textInput,
        color: colors.onSecondaryContainer,
        backgroundColor: colors.secondaryContainer,
      }}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 24,
    paddingHorizontal: 16,
  },
});

export default forwardRef(InputBox);
