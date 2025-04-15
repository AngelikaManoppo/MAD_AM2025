/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';

AppRegistry.registerComponent(appName, () => SignUp);
