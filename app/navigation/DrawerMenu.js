// navigation/Menu.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import Ventana1 from "../components/Sobre_nosotros";
import PantallaMenu from "../navigation/MenuProductos";
import Hazlo_por_ti_Screen from "../components/Hazlo_por_ti";
import Ventana6 from "../components/Contactanos";
import PantallaMenuFuturos from "../navigation/MenuFuturos_proyectos";
import LoginScreen from "../components/Login";
import Carrito from "../components/Carrito";
import CustomDrawerContent from "./CustomDrawerBD";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useAuth } from "../context/AuthContext";
import AdminPedidos from "../components/AdminPedidos";
import PerfilUsuario from "../components/PerfilUsuario";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  const { usuario } = useAuth();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        drawerStyle: {
          backgroundColor: "green",
        },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
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
      <Drawer.Screen
        name="Sobre Nosotros"
        component={Ventana1}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Productos"
        component={PantallaMenu}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="shopping-bag" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Hazlo por ti"
        component={Hazlo_por_ti_Screen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="build" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Futuros Proyectos"
        component={PantallaMenuFuturos}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="lightbulb" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contáctanos"
        component={Ventana6}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="mail-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Carrito"
        component={Carrito}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerItemStyle: { height: 0 },
        }}
      />
      {usuario && usuario.rol === "admin" && (
        <Drawer.Screen
          name="Pedidos (Admin)"
          component={AdminPedidos}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="admin-panel-settings" size={size} color={color} />
            ),
          }}
        />
      )}

      {usuario && (
        <Drawer.Screen
          name="Mi Perfil"
          component={PerfilUsuario}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
