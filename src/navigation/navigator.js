import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen';
import TimingScreen from '../screens/TimingScreen';
import InterpolationScreen from '../screens/InterpolationScreen';
import ScrollEventScreen from '../screens/ScrollEventScreen';
import DecayPanResponderScreen from '../screens/DecayPanScreen';

const navigator = createStackNavigator({
  home: HomeScreen,
  decay: DecayPanResponderScreen,
  scrollEvent: ScrollEventScreen,
  interpolate: InterpolationScreen,
  time: TimingScreen,
},
  {
    defaultNavigationOptions: {
      header: null
    }
  })

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;