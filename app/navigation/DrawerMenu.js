// navigation/Menu.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import Ventana1 from "../components/Sobre_nosotros";
import PantallaMenu from "../navigation/MenuProductos";
import Hazlo_por_ti_Screen from "../components/Hazlo_por_ti";
import Ventana6 from "../components/Contactanos";
import PantallaMenuFuturos from "../navigation/MenuFuturos_proyectos";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
        headerRight: () => (
          <Image
            source={require("../../assets/logo_EcoTech.jpeg")}
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Sobre Nosotros" component={Ventana1} />
      <Drawer.Screen name="Productos" component={PantallaMenu} />
      <Drawer.Screen name="Hazlo por ti" component={Hazlo_por_ti_Screen} />
      <Drawer.Screen name="Futuros Proyectos" component={PantallaMenuFuturos} />
      <Drawer.Screen name="Contáctanos" component={Ventana6} />
    </Drawer.Navigator>
  );
}
