import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screen/Home';
import { SignIn } from '../screen/SignIn';
import { styles } from '../components/Buttonicon/styles';
import { Background } from '../components/Background';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {

  return (

    <Navigator
      headerMode={'none'}
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  )
}