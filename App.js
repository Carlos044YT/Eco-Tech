import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./app/navigation/index";
import { AuthProvider } from "./app/context/AuthContext";
import { CarritoProvider } from "./app/context/CarritoContext";

export default function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </CarritoProvider>
    </AuthProvider>
  );
}
