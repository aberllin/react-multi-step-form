import DesignSystem from './System';

import {
  breakpoints,
  colorPalette,
  fontWeight,
  sizes,
  SystemBreakpointMap,
  SystemSizeMap,
  type SystemColorPalette,
  type SystemFontWeightMap,
} from './System/tokens';

export type {
  SizeMap,
  SystemSize,
  SystemSizeMap,
  SystemColorPalette,
  SystemFontWeight,
} from './System/tokens';

export type SystemType = {
  baseFontSize: string;
  fontWeight: SystemFontWeightMap;
  sizes: SystemSizeMap;
};

export type SystemTokens = {
  type: SystemType;
  breakpoints: SystemBreakpointMap;
  colors: {
    colorPalette: SystemColorPalette;
  };
  spacing: { scale: SystemSizeMap };
};

const tokens: SystemTokens = {
  type: {
    baseFontSize: '14px',
    sizes,
    fontWeight,
  },
  colors: {
    colorPalette,
  },
  spacing: {
    scale: sizes,
  },
  breakpoints,
};

const theme = new DesignSystem(tokens);
export type Theme = typeof theme;
export type WithTheme = { theme: Theme };

export default theme;
