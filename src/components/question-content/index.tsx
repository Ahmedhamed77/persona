import React from 'react';
import {View} from 'react-native';

import {styles} from './style';

import {COLORS, CustomText, PressableScale, Question, QuestionOption} from '@/shared';

interface QuestionOptions {
  question: Question;
  selectedOption: string;
  onChooseOption(option: QuestionOption): void;
}
export const QuestionContent: React.FC<QuestionOptions> = ({
  question,
  selectedOption,
  onChooseOption,
}) => {
  return (
    <View style={{marginBottom: 32, height: '65%'}}>
      <CustomText style={{marginBottom: 22, textAlign: 'center'}} p1>
        {question.text}
      </CustomText>

      {question.options.map((option, index) => {
        return (
          <PressableScale
            wrapperStyle={[
              styles.content,
              {
                borderColor: selectedOption === option.value ? COLORS.COLOR_FF9 : COLORS.COLOR_FFF,
                backgroundColor: selectedOption === option.value ? COLORS.COLOR_FF9 : 'transparent',
              },
            ]}
            onPress={() => onChooseOption(option)}
            key={index}>
            <CustomText style={{}} p2>
              {option.value}
            </CustomText>
            <CustomText style={{paddingHorizontal: 8}} p2>
              {option.content}
            </CustomText>
          </PressableScale>
        );
      })}
    </View>
  );
};
