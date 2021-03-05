/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Apps from './src/components/App';
import Dragon from './src/components/Dragon';
import Getfetch from './src/components/Getfetch';
import Hexcolor from './src/components/Hexcolor';
import Loaders from './src/components/Loaders';
import Navigate from './src/components/Navigate';

AppRegistry.registerComponent(appName, () => Getfetch);
