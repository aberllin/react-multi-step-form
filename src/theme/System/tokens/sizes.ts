import { SystemBreakpoint } from './breakpoints';

export type SizeMap = {
  xxxxs: string;
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  base: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
};

export type SystemSize = keyof SizeMap;
export type SystemSizeMap = {
  [key in SystemBreakpoint]: SizeMap;
};

const sizes: SystemSizeMap = {
  mobile: {
    xxxxs: '2px',
    xxxs: '4px',
    xxs: '6px',
    xs: '6px',
    s: '10px',
    base: '12px',
    m: '14px',
    l: '14px',
    xl: '18px',
    xxl: '24px',
    xxxl: '32px',
    xxxxl: '40px',
  },
  tablet: {
    xxxxs: '2px',
    xxxs: '4px',
    xxs: '6px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    xxxxl: '56px',
  },
  tabletLandscape: {
    xxxxs: '2px',
    xxxs: '4px',
    xxs: '6px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    xxxxl: '56px',
  },
  desktop: {
    xxxxs: '2px',
    xxxs: '4px',
    xxs: '6px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    xxxxl: '56px',
  },
  desktopBig: {
    xxxxs: '2px',
    xxxs: '4px',
    xxs: '6px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    xxxxl: '56px',
  },
};

export default sizes;
