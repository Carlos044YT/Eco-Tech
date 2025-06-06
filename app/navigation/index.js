import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerMenu from "./DrawerMenu";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerMenu} />
    </Stack.Navigator>
  );
}
