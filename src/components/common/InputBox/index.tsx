import {Ref, forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme, TextInput, TextInputProps} from 'react-native-paper';

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
      onChangeText={setText}
      cursorColor={colors.primary}
      placeholderTextColor={'gray'}
      mode="flat"
      outlineStyle={{borderRadius: 30}}
      {...props}
    />
  );
}

export default forwardRef(InputBox);
