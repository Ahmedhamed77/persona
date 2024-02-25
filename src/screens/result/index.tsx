import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

interface ResultScreenType {}

export const ResultScreen: React.FC<ResultScreenType> = () => {
  return (
    <View style={styles.container}>
      <Text>Result Screen</Text>
    </View>
  );
};
