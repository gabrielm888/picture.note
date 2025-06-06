import { DefaultTheme } from '@react-navigation/native';
import type { Theme } from '@react-navigation/native';
import { CombinedLightTheme } from './theme';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: CombinedLightTheme.colors.primary,
    background: CombinedLightTheme.colors.background,
    card: CombinedLightTheme.colors.surface,
    text: CombinedLightTheme.colors.onSurface,
    border: CombinedLightTheme.colors.outline,
    notification: CombinedLightTheme.colors.error,
  },
  dark: false,
};

export { navigationTheme };
