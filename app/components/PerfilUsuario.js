import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, FlatList, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function PerfilUsuario({ navigation }) {
  const { usuario, logout } = useAuth();
  const [misPedidos, setMisPedidos] = useState([]);

  useEffect(() => {
    if (usuario) {
      const pedidosUsuario = (global.pedidosGlobal || []).filter(
        (pedido) => pedido.cliente === usuario.correo
      );
      setMisPedidos(pedidosUsuario);
    }
  }, [usuario]);

  const cerrarSesion = () => {
    logout();
    navigation.navigate("Login");
  };

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.fecha}>
        <Icon name="calendar-today" size={16} /> {item.fecha}
      </Text>
      <Text>
        <Icon name="inventory" size={16} /> Productos:{" "}
        {item.productos
          .map((p) => (typeof p === "string" ? p : p.nombre))
          .join(", ")}
      </Text>
      <Text style={styles.estado}>
        <Icon name="assignment" size={16} /> Estado: {item.estado}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image
          source={require("../../assets/default_login.jpg")}
          style={styles.imagen}
        />
        <Text style={styles.correo}>{usuario.correo}</Text>
        <Text style={styles.rol}>{usuario.rol}</Text>
        <Button title="Cerrar sesión" onPress={cerrarSesion} color="red" />
      </View>

      {usuario.rol === "cliente" && (
        <>
          <Text style={styles.subtitulo}>Mis pedidos</Text>
          <FlatList
            data={misPedidos}
            renderItem={renderPedido}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>No tienes pedidos registrados.</Text>}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  perfil: { alignItems: "center", marginBottom: 30 },
  imagen: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  correo: { fontSize: 18, fontWeight: "bold" },
  rol: { marginBottom: 10 },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#f1f8e9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  fecha: { marginBottom: 5 },
  estado: { marginTop: 5, fontStyle: "italic" },
});
