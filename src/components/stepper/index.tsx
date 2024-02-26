import React from 'react';
import {Dimensions, StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './styles';

const {width} = Dimensions.get('screen');

interface StepperProps {
  steps: number;
  current: number;
  wrapperStyle?: StyleProp<ViewStyle>;
}
export const Stepper: React.FC<StepperProps> = ({steps = 4, current, wrapperStyle}) => {
  const stepper = [...Array(steps).keys()];
  return (
    <View style={styles.container}>
      {stepper.map(step => (
        <View
          key={step}
          style={[
            styles.row,
            current >= step && styles.currentStep,
            {width: (width - 22) / (stepper.length * 2)},
            wrapperStyle,
          ]}
        />
      ))}
    </View>
  );
};
