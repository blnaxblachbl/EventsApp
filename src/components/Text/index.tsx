import { useLanguage } from '@libs/I18nManager';
import React, { useMemo } from 'react';
import {
  Text as RNText,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

export const Text = ({ style, ...props }: TextProps) => {
  const { direction } = useLanguage();

  
  const textStyle = useMemo<StyleProp<TextStyle>>(
    () => [
      style,
      {
        direction,
        writingDirection: direction
      },
    ],
    [style, direction],
  );

  return <RNText style={textStyle} {...props} />;
};
