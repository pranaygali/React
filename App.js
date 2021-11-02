import {createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Home from './src/Home';
import Contact from './src/Contact';
import About from './src/About';

const navigator = createStackNavigation(
  {
    Home: Home,
    Contact: Contact,
    About: About,
  },

  {
      initialRouteName: 'Home',
            defaultNavigationOptions: {
              title: 'App',
            }
      
  }
);

export default createAppContainer(navigator);