import * as React from 'react';
import { Theme } from 'react-native-paper/lib/typescript/types';

declare module 'react-native-paper' {
  export interface MD3Theme extends Theme {
    colors: {
      primary: string;
      onPrimary: string;
      primaryContainer: string;
      onPrimaryContainer: string;
      secondary: string;
      onSecondary: string;
      secondaryContainer: string;
      onSecondaryContainer: string;
      tertiary: string;
      onTertiary: string;
      tertiaryContainer: string;
      onTertiaryContainer: string;
      error: string;
      onError: string;
      errorContainer: string;
      onErrorContainer: string;
      background: string;
      onBackground: string;
      surface: string;
      onSurface: string;
      surfaceVariant: string;
      onSurfaceVariant: string;
      outline: string;
      outlineVariant: string;
      shadow: string;
      scrim: string;
      inverseSurface: string;
      inverseOnSurface: string;
      inversePrimary: string;
      elevation: {
        level0: string;
        level1: string;
        level2: string;
        level3: string;
        level4: string;
        level5: string;
      };
      surfaceDisabled: string;
      onSurfaceDisabled: string;
      backdrop: string;
    };
  }

  export const Text: React.ComponentType<{
    children: React.ReactNode;
    style?: any;
  }>;

  export const TextInput: React.ComponentType<{
    mode?: 'flat' | 'outlined';
    label?: string;
    value: string;
    onChangeText?: (text: string) => void;
    style?: any;
    multiline?: boolean;
    numberOfLines?: number;
    theme?: any;
    editable?: boolean;
    disabled?: boolean;
    placeholder?: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  }>;

  export const Button: React.ComponentType<{
    mode?: 'text' | 'outlined' | 'contained';
    onPress?: () => void;
    style?: any;
    theme?: any;
    children: React.ReactNode;
  }>;

  export function useTheme(): MD3Theme;
  export const Provider: React.ComponentType<{ theme: MD3Theme; children: React.ReactNode }>;
  export const DefaultTheme: MD3Theme;
  
  // Re-export all types from react-native-paper
  export * from 'react-native-paper';
}
