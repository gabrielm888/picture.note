declare module 'react-native' {
  import * as React from 'react';
  import * as ReactNative from 'react-native';

  // Extend TextProps to include children
  export interface TextProps extends ReactNative.TextProps {
    children?: React.ReactNode;
    style?: any;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  }

  // Extend ViewProps to include children
  export interface ViewProps extends ReactNative.ViewProps {
    children?: React.ReactNode;
    style?: any;
  }

  export const Text: React.FC<TextProps>;
  export const View: React.FC<ViewProps>;
  export const ScrollView: React.ComponentType<ViewProps>;
  export const SafeAreaView: React.ComponentType<ViewProps>;
  export const StyleSheet: any;
  export const Platform: {
    OS: 'ios' | 'android' | 'windows' | 'macos' | 'web';
    Version: number | string;
    select: (specifics: { [platform: string]: any }) => any;
  };
  
  // Add other React Native components as needed
  export const StatusBar: React.ComponentType<any>;
  
  // AppRegistry
  export const AppRegistry: {
    registerComponent: (
      appKey: string,
      componentProvider: () => React.ComponentType<any>,
      section?: boolean
    ) => string;
    runApplication: (appKey: string, appParameters: any) => void;
    getApplication: (appKey: string, appParameters?: any) => any;
    setWrapperComponentProvider: (provider: () => React.ComponentType<any>) => void;
    getAppKeys: () => string[];
    unmountApplicationComponentAtRootTag: (rootTag: number) => boolean;
  };
  export const FlatList: React.ComponentType<any>;
  export const TouchableOpacity: React.ComponentType<any>;
  export const TextInput: React.ComponentType<any>;
  
  // Add any other React Native exports you need
  export * from 'react-native';
}
