import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {styles} from './style';

import {CustomText} from '@/shared';

interface HomeScreenType {}

export const HomeScreen: React.FC<HomeScreenType> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CustomText p1>Home screen</CustomText>
      </View>
    </SafeAreaView>
  );
};
