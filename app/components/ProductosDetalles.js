import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useCarrito } from "../context/CarritoContext";

export default function DetalleFuturoProductoScreen({ route }) {
  const { producto } = route.params;
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useCarrito();

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    agregarAlCarrito({ ...producto, cantidad });
    alert("Producto agregado al carrito");
  };

  return (
    <View style={styles.container}>
      <Image source={producto.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.descripcion}>{producto.descripcion}</Text>

      <View style={styles.contador}>
        <Button title="−" onPress={disminuir} />
        <Text style={styles.cantidad}>{cantidad}</Text>
        <Button title="+" onPress={aumentar} />
      </View>

      <Button title="Agregar al carrito" color="green" onPress={agregar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  imagen: { width: "100%", height: 400, borderRadius: 10 },
  nombre: { fontSize: 24, fontWeight: "bold", marginTop: 15 },
  descripcion: { fontSize: 16, marginTop: 10 },
  contador: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  cantidad: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});
