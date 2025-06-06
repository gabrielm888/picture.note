/**
 * PictureNote - A note-taking app
 */

import * as React from 'react';
import { StatusBar, StyleSheet, Platform, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import NoteDetailScreen from './screens/NoteDetailScreen';

// Theme
import { CombinedLightTheme } from './config/theme';
import { navigationTheme } from './config/navigationTheme';

// Types
import { RootStackParamList } from './types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

type SectionProps = {
  children: React.ReactNode;
  title: string;
};

// Section component that can be used throughout the app
function Section({ children, title }: SectionProps): JSX.Element {
  const titleStyle = [styles.sectionTitle, { fontSize: 24, fontWeight: '600' }];
  const descriptionStyle = [styles.sectionDescription, { fontSize: 16 }];
  
  return (
    <View style={styles.sectionContainer}>
      <Text style={titleStyle}>
        {title}
      </Text>
      <Text style={descriptionStyle}>
        {children}
      </Text>
    </View>
  );
}

const App = (): JSX.Element => {
  // Use the pre-configured navigation theme
  const theme = navigationTheme;

  return (
    <PaperProvider theme={CombinedLightTheme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={CombinedLightTheme.colors.primary}
        />
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: CombinedLightTheme.colors.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
              contentStyle: {
                backgroundColor: CombinedLightTheme.colors.background,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'PictureNote',
              }}
            />
            <Stack.Screen
              name="NoteDetail"
              component={NoteDetailScreen}
              options={{
                title: 'Note Details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CombinedLightTheme.colors.background,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: CombinedLightTheme.colors.onSurface,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: CombinedLightTheme.colors.onSurfaceVariant,
  },
});
