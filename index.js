// /**
//  * @format
//  */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import TimeStamp from './src/components/TimeStamp';

AppRegistry.registerComponent(appName, () => TimeStamp);
