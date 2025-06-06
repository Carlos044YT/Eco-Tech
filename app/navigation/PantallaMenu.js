import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ventana1 from "../components/Tutorial";
import Ventana2 from "../components/Productos";

const Stack = createStackNavigator();

export default function PantallaMenu() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Ventana 1"
        component={Ventana1}
        options={{ title: "Tutorial" }}
      />
      <Stack.Screen
        name="Ventana2"
        component={Ventana2}
        options={{ title: "Prueba" }}
      />
    </Stack.Navigator>
  );
}
