import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {styles} from './style';

import {Result} from '@/components';
import {RootStackParamList} from '@/navigation/root-interface';
import {CustomButton} from '@/shared';

type ResultScreenType = NativeStackScreenProps<RootStackParamList, 'Result'>;

export const ResultScreen: React.FC<ResultScreenType> = ({navigation, route}) => {
  const {result} = route.params;
  const isExtrovert = result.extrovertPoint > result.introvertPoint;

  const onFinish = () => navigation.reset({index: 0, routes: [{name: 'GetStart'}]});

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <View style={styles.content}>
          {isExtrovert ? (
            <Result
              title="You are more of a public extrovert and private introvert
          "
            />
          ) : (
            <Result title="You are more of a public introvert and private extrovert" />
          )}
        </View>
        <CustomButton onPressIn={onFinish} title="Finish" />
      </View>
    </SafeAreaView>
  );
};
