import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from './root-interface';

import {GetStartedScreen, HomeScreen, ResultScreen} from '@/screens';
import {COLORS} from '@/shared';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, contentStyle: {backgroundColor: COLORS.COLOR_764}}}>
        <Stack.Screen name="GetStart" component={GetStartedScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
