import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ArrowLeft} from 'assets/svg';
import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './style';

import {QuestionContent, Stepper} from '@/components';
import {RootStackParamList} from '@/navigation/root-interface';
import {CustomButton, QuestionOption} from '@/shared';
import {QUESTIONS} from '@/shared/data';

type HomeScreenType = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenType> = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [score, setScore] = useState({introvertPoint: 0, extrovertPoint: 0});

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleNextQuestion = () => {
    // Update score based on selected option
    const selectedOptionDetails = currentQuestion.options.find(
      option => option.value === selectedOption
    );

    if (selectedOptionDetails) {
      setScore(prevScore => ({
        introvertPoint: prevScore.introvertPoint + selectedOptionDetails.introvertPoint,
        extrovertPoint: prevScore.extrovertPoint + selectedOptionDetails.extrovertPoint,
      }));
    }

    // Move to next question
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(''); // Reset selection for the next question
    }
  };

  const onGoToPrevQuestion = () => {
    setCurrentQuestionIndex(prev => prev - 1);
    setSelectedOption('');
  };

  const handleSelectOption = (option: QuestionOption) => {
    setSelectedOption(option.value); // Correctly set selectedOption state to the option's value
  };

  const onShowResult = () => navigation.navigate('Result', {result: score});
  const isLast = currentQuestionIndex === QUESTIONS.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{marginBottom: 12}}>
          <Pressable onPressIn={currentQuestionIndex > 0 ? onGoToPrevQuestion : navigation.goBack}>
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
          title={isLast ? 'Show Result' : 'Next'}
          onPress={isLast ? onShowResult : handleNextQuestion}
          disabled={!selectedOption}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
