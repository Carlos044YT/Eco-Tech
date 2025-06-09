import { View, Text, Image, StyleSheet } from "react-native";

export default function DetalleFuturoProductoScreen({ route }) {
  const { productos_futuro } = route.params;

  return (
    <View style={styles.container}>
      <Image source={productos_futuro.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{productos_futuro.nombre}</Text>
      <Text style={styles.descripcion}>{productos_futuro.descripcion}</Text>
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
