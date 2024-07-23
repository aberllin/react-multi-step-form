import theme from '../../theme';

const isMobileBreakpoint = () =>
  theme.getCurrentBreakpoint().includes('mobile');

export default isMobileBreakpoint;
