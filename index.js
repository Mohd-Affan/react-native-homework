// /**
//  * @format
//  */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

// import Myntra from './src/components/Myntra';
// import Newfile from './src/components/Newfile';
// import Data from './src/components/Data';
import Location from './src/components/Location';
import Playlist from './src/components/Playlist';
import Route from './src/navigation/Route';
import VideoComponent from './src/components/VideoComponent';
AppRegistry.registerComponent(appName, () => Route);
