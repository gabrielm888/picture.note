import * as React from 'react';
import { TextProps, ViewProps } from 'react-native';

declare global {
  namespace React {
    // Re-export all types from @types/react
    export * from 'react';
    
    // Add any additional React types here
    interface FunctionComponent<P = {}> {
      (props: React.PropsWithChildren<P>, context?: any): React.ReactElement<any, any> | null;
      propTypes?: any;
      contextTypes?: any;
      defaultProps?: Partial<P>;
      displayName?: string;
    }
    
    // Add other React types as needed
    interface ComponentType<P = {}> extends React.ComponentClass<P>, React.FunctionComponent<P> {}
  }

  // Extend React Native types
  namespace JSX {
    interface IntrinsicElements {
      // Add React Native elements
      view: React.DetailedHTMLProps<ViewProps & { children?: React.ReactNode }, any>;
      text: React.DetailedHTMLProps<TextProps & { children?: React.ReactNode }, any>;
      [elemName: string]: any;
    }
  }
}

// Ensure JSX namespace is available
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {}
    interface ElementAttributesProperty { props: {}; }
    interface ElementChildrenAttribute { children: {}; }
    interface IntrinsicElements { [elemName: string]: any; }
  }
}

export {};
