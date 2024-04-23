/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
    console.log('Player is set up');
  });

AppRegistry.registerComponent(appName, () => App);
