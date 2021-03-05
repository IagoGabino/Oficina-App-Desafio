import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Proposals from "./pages/Proposals";
import Home from "./pages/Home";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Proposals" component={Proposals} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
