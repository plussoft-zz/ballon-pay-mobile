import Home from './Pages/Home';
import About from './Pages/About';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
    About,
  }),
);

export default Routes;
