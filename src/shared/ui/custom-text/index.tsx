import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {styles} from './style';

export interface CustomTextProps extends TextProps {
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  p4?: boolean;
  p5?: boolean;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  p1,
  p2,
  p3,
  p4,
  p5,
  style,
  ellipsizeMode = 'tail',
  ...props
}) => {
  return (
    <Text
      {...props}
      ellipsizeMode={ellipsizeMode}
      style={StyleSheet.flatten([
        p1 && styles.p1Style,
        p2 && styles.p2Style,
        p3 && styles.p3Style,
        p4 && styles.p4Style,
        p5 && styles.p5Style,
        styles.commonStyle,
        style,
      ])}>
      {children}
    </Text>
  );
};
