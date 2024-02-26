import React from 'react';
import {Pressable, PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

import {styles} from './style';
import {CustomText} from '../custom-text';

import {COLORS} from '@/shared/colors';

interface CustomButtonType extends Omit<PressableProps, 'style'> {
  title: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<CustomButtonType> = ({
  title,
  wrapperStyle,
  textStyle,
  ...props
}) => {
  const isDisabled = props.disabled;
  return (
    <Pressable
      style={[styles.container, wrapperStyle, isDisabled && {backgroundColor: COLORS.COLOR_AA8}]}
      {...props}>
      <CustomText style={textStyle} p2>
        {title}
      </CustomText>
    </Pressable>
  );
};
