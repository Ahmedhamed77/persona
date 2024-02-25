import React from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';

import {styles} from './style';
import {CustomText} from '../custom-text';

interface CustomButtonType {
  title: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  onPress(): void;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<CustomButtonType> = ({
  title,
  wrapperStyle,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable onPressIn={onPress} style={[styles.container, wrapperStyle]}>
      <CustomText style={textStyle} p3>
        {title}
      </CustomText>
    </Pressable>
  );
};
