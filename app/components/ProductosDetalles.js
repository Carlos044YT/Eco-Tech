import { View, Text, Image, StyleSheet } from "react-native";

export default function DetalleProductoScreen({ route }) {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={producto.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.descripcion}>{producto.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imagen: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  descripcion: {
    fontSize: 16,
    marginTop: 10,
  },
});
