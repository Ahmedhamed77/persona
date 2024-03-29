import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';

import {RootStackParamList} from '@/navigation/root-interface';
import {CustomButton, CustomText} from '@/shared';

type GetStartedScreenType = NativeStackScreenProps<RootStackParamList, 'GetStart'>;

export const GetStartedScreen: React.FC<GetStartedScreenType> = ({navigation}) => {
  const onGoToQuestionsScreen = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <CustomText style={styles.headerStyle} p1>
            Am I Introverted or Extroverted?
          </CustomText>
          <CustomText style={styles.descTextStyle} p3>
            So, where do you fall? Are you an introvert, extrovert, or something in between? Answer
            these questions about what you would do in any given situation to find out.
          </CustomText>
        </View>
        <CustomButton title="Start" onPress={onGoToQuestionsScreen} />
      </ScrollView>
    </SafeAreaView>
  );
};
