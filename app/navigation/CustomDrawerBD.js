import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Lista de pantallas normales */}
      <DrawerItemList {...props} />

      {/* Línea divisoria */}
      <View style={styles.divider} />

      {/* Sección sensible */}
      <DrawerItem
        label="Carrito de Compras"
        onPress={() => props.navigation.navigate("Carrito")}
        icon={({ color, size }) => (
          <Icon name="shopping-cart" size={size} color={color} />
        )}
        activeTintColor="white"
        inactiveTintColor="white"
      />
      <DrawerItem
        label="Iniciar Sesión"
        onPress={() => props.navigation.navigate("Login")}
        icon={({ color, size }) => (
          <Icon name="login" size={size} color={color} />
        )}
        activeTintColor="white"
        inactiveTintColor="white"
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 3.5,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
