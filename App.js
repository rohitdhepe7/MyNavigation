import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Follow from './screens/Follow';
import ThirdScreen from './screens/ThirdScreen';


const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Follow: { screen: Follow },
    ThirdScreen: { screen: ThirdScreen}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#BA2F16"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }

);

const App = createAppContainer(MainNavigator);
export default App;











