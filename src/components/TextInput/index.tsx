import { useLanguage } from '@libs/I18nManager';
import React, { useMemo } from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';

export const TextInput = ({ style, ...props }: TextInputProps) => {
  const { direction } = useLanguage();

  const inputStyle = useMemo<StyleProp<TextStyle>>(
    () => [
      style,
      {
        direction,
        writingDirection: direction,
        textAlign: direction === 'rtl' ? 'right' : 'left',
      },
    ],
    [style, direction],
  );

  return <RNTextInput style={inputStyle} {...props} />;
};
