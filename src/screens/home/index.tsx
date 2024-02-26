import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ArrowLeft} from 'assets/svg';
import React, {useCallback, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';

import {QuestionContent, Stepper} from '@/components';
import {RootStackParamList} from '@/navigation/root-interface';
import {CustomButton, QuestionOption} from '@/shared';
import {QUESTIONS} from '@/shared/data';

type HomeScreenType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenType> = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({
    introvertPoint: 0,
    extrovertPoint: 0,
  });

  const [selections, setSelections] = useState<{[key: number]: string}>({});

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  const selectedOption = selections[currentQuestionIndex] || '';

  const updateScore = useCallback((option: QuestionOption) => {
    setScore(prevScore => ({
      introvertPoint: prevScore.introvertPoint + option.introvertPoint,
      extrovertPoint: prevScore.extrovertPoint + option.extrovertPoint,
    }));
  }, []);

  const handleSelectOption = useCallback(
    (option: QuestionOption) => {
      setSelections(prevSelections => ({
        ...prevSelections,
        [currentQuestionIndex]: option.value,
      }));
      updateScore(option);
    },
    [updateScore, currentQuestionIndex]
  );

  const onShowResult = () => navigation.navigate('Result', {result: score});

  const handleNavigation = useCallback(() => {
    if (isLastQuestion) {
      onShowResult();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [isLastQuestion, onShowResult]);

  const handleGoBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      navigation.goBack();
    }
  }, [currentQuestionIndex, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.wrapperStyle}>
          <Pressable onPressIn={handleGoBack}>
            <ArrowLeft />
          </Pressable>

          <Stepper
            wrapperStyle={{marginVertical: 22}}
            current={currentQuestionIndex}
            steps={QUESTIONS.length}
          />
        </View>

        <QuestionContent
          question={currentQuestion}
          selectedOption={selectedOption}
          onChooseOption={handleSelectOption}
        />

        <CustomButton
          title={isLastQuestion ? 'Show Result' : 'Next'}
          onPress={handleNavigation}
          disabled={!selectedOption}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
