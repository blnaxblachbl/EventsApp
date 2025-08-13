import React, { useMemo } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

export const Button = ({ style, disabled, ...props }: PressableProps) => {
  const buttonStyles = useMemo(() => {
    const _styles: StyleProp<ViewStyle> = [styles.button];
    if (disabled) {
      _styles.push(styles.disabled);
    }
    if (style) {
      _styles.push(style as StyleProp<ViewStyle>);
    }
    return _styles;
  }, [style, disabled]);
  return <Pressable style={buttonStyles} disabled={disabled} {...props} />;
};
