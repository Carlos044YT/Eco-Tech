import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";

export default function Carrito() {
  const { carrito, actualizarCantidad, eliminarProducto, vaciarCarrito } =
    useCarrito();
  const { usuario } = useAuth();

  const finalizarCompra = () => {
    if (!usuario) {
      alert("Debes iniciar sesión para finalizar tu compra");
      return;
    }

    const fecha = new Date();
    const fechaFormateada = `${fecha.getFullYear()}-${String(
      fecha.getMonth() + 1
    ).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`;

    const pedido = {
      id: Date.now().toString(),
      cliente: usuario.correo,
      fecha: fechaFormateada,
      productos: carrito,
      estado: "Pendiente",
    };

    if (!global.pedidosGlobal) {
      global.pedidosGlobal = [];
    }
    global.pedidosGlobal.push({
      ...pedido,
      productos: pedido.productos.map((p) => `${p.nombre} x${p.cantidad}`),
    });

    console.log("Pedido enviado al admin:", pedido);
    vaciarCarrito();
    alert("¡Compra finalizada!");
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text>Cantidad: {item.cantidad}</Text>
      <View style={styles.botones}>
        <Button
          title="+"
          onPress={() => actualizarCantidad(item.id, item.cantidad + 1)}
        />
        <Button
          title="−"
          onPress={() =>
            item.cantidad > 1
              ? actualizarCantidad(item.id, item.cantidad - 1)
              : eliminarProducto(item.id)
          }
        />
        <Button
          title="Eliminar"
          color="red"
          onPress={() => eliminarProducto(item.id)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tu carrito</Text>
      <FlatList
        data={carrito}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>El carrito está vacío.</Text>}
      />
      {carrito.length > 0 && (
        <Button
          title="Finalizar compra"
          color="green"
          onPress={finalizarCompra}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#e0f2f1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: { fontWeight: "bold", fontSize: 16 },
  botones: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
