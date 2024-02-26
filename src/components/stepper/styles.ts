import {StyleSheet} from 'react-native';

import {COLORS} from '@/shared';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    height: 4,
    borderRadius: 2,
    margin: 4,
    backgroundColor: COLORS.COLORS_DDD,
  },
  currentStep: {
    backgroundColor: COLORS.COLOR_FF9,
  },
});
