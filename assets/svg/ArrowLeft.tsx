import * as React from 'react';
import Svg, {G, Path, Defs, SvgProps} from 'react-native-svg';

import {COLORS} from '@/shared';

interface ArrowLeftProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  size?: number;
  color?: string;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({size = 28, color = COLORS.COLOR_FFF}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 28" fill="none">
      <G filter="url(#filter0_dd_2107_67972)" stroke={color} strokeWidth={2} strokeLinecap="round">
        <Path d="M11.5 19l-6-7 6-7" strokeLinejoin="round" />
        <Path d="M5.5 12H19" />
      </G>
      <Defs />
    </Svg>
  );
};
