// /**
//  * @format
//  */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

// import Notifications from './src/components/Notifications';
import GoogleSignIn from './src/components/GooglSignIn';

AppRegistry.registerComponent(appName, () => GoogleSignIn);
