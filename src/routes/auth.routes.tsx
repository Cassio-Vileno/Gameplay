import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screen/Home";
import { SignIn } from "../screen/SignIn";
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
    screenOptions={{
      cardStyle:{backgroundColor: 'trasparent'} 
    }}
    > 
      <Screen
      name= "SignIn"
      component={SignIn}/>

      <Screen
      name= "Home"
      component={Home}/>
    </Navigator>
  )
  
}