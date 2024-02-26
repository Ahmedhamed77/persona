import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './style';

import {CustomText} from '@/shared';

interface ResultProps {
  title: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}
export const Result: React.FC<ResultProps> = ({title, wrapperStyle}) => {
  return (
    <View style={wrapperStyle}>
      <CustomText style={styles.textStyle} p1>
        {title}
      </CustomText>
    </View>
  );
};
