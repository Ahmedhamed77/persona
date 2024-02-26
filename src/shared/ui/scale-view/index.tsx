import React from 'react';
import {
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';
import Reanimated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

export interface PressableScaleProps extends TouchableWithoutFeedbackProps {
  activeScale?: number;
  defaultBackground?: string;
  activeBackground?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const ReanimatedTouchableWithoutFeedback =
  Reanimated.createAnimatedComponent(TouchableWithoutFeedback);

export const PressableScale: React.FC<PressableScaleProps> = ({children, ...props}) => {
  const {
    activeScale = 0.95, // default value
    delayPressIn = 0,
    onPress,
    wrapperStyle,
    ...restProps
  } = props;

  const pressed = useSharedValue(false);
  const isPressedIn = useSharedValue(false);

  const touchableStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(pressed.value ? activeScale : 1)}],
    }),
    [activeScale, isPressedIn]
  );

  return (
    <ReanimatedTouchableWithoutFeedback
      delayPressIn={delayPressIn}
      onPress={onPress}
      onPressIn={() => {
        pressed.value = true;
      }}
      onPressOut={() => {
        pressed.value = false;
      }}
      style={touchableStyle}
      {...restProps}>
      <Reanimated.View style={wrapperStyle}>{children}</Reanimated.View>
    </ReanimatedTouchableWithoutFeedback>
  );
};
