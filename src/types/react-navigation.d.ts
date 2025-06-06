import { RootStackParamList } from './index';

declare module '@react-navigation/native' {
  export function useNavigation<T = any>(): {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
    goBack: () => void;
    // Add other navigation methods as needed
  };
}

declare module '@react-navigation/stack' {
  export function createStackNavigator(): any; // Use 'any' as a temporary solution
  // Add other Stack Navigator types as needed
}
