/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Register the app
AppRegistry.registerComponent(appName, () => App);

// Mount the app for web
if (window.document) {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
