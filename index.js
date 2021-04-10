// /**
//  * @format
//  */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import Notifications from './src/components/Notifications';

AppRegistry.registerComponent(appName, () => Notifications);
