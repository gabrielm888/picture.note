/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

// Get app name from package.json
const appName = 'PictureNote';

// Register the main component
AppRegistry.registerComponent(appName, () => App);

// For web rendering
if (typeof window !== 'undefined') {
  const rootTag = document.getElementById('root');
  if (rootTag) {
    AppRegistry.runApplication(appName, {
      rootTag,
      hydrate: true,
    });
  }
}

export default App;
