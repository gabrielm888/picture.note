import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

// Combine Paper and Navigation themes
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

// Create a base theme with proper types
export const CombinedLightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    // Custom colors
    primary: '#6200ee',
    primaryContainer: '#e8def8',
    secondary: '#625b71',
    secondaryContainer: '#e8def8',
    tertiary: '#7d5260',
    tertiaryContainer: '#ffd8e4',
    surface: '#fffbfe',
    surfaceVariant: '#e7e0ec',
    surfaceDisabled: 'rgba(28, 27, 31, 0.12)',
    background: '#fffbfe',
    error: '#b3261e',
    errorContainer: '#f9dedc',
    onPrimary: '#ffffff',
    onPrimaryContainer: '#21005d',
    onSecondary: '#ffffff',
    onSecondaryContainer: '#1e192b',
    onTertiary: '#ffffff',
    onTertiaryContainer: '#370b1e',
    onSurface: '#1c1b1f',
    onSurfaceVariant: '#49454f',
    onSurfaceDisabled: 'rgba(28, 27, 31, 0.38)',
    onError: '#ffffff',
    onErrorContainer: '#410e0b',
    onBackground: '#1c1b1f',
    outline: '#79747e',
    outlineVariant: '#cac4d0',
    inverseSurface: '#313033',
    inverseOnSurface: '#f4eff4',
    inversePrimary: '#d0bcff',
    shadow: '#000000',
    scrim: '#000000',
    backdrop: 'rgba(28, 27, 31, 0.4)',
    // Navigation theme colors
    card: '#fffbfe',
    text: '#1c1b1f',
    border: '#e7e0ec',
    notification: '#b3261e',
  },
} as const;

// Extend the theme type for app usage
export type AppTheme = typeof CombinedLightTheme;
