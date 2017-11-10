import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import AboutScreen from './src/containers/AboutScreen';
import ProfileScreen from './src/containers/ProfileScreen';
import HomeScreen from './src/containers/HomeScreen';

import SideBar from './src/components/SideBar';

const App = DrawerNavigator(
  {
  	Home    : { screen: HomeScreen },
  	Profile : { screen: ProfileScreen },
		About   : { screen: AboutScreen },
  },
  {
		contentComponent: props => <SideBar {...props} />
  }
);

export default App;