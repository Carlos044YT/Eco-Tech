import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";

if (!global.pedidosGlobal) {
  global.pedidosGlobal = [
    {
      id: "e1",
      cliente: "Ejemplo 1",
      fecha: "2025-06-13",
      productos: ["NeoSoap Antibacterial", "NeoCrema Limón"],
      estado: "Pendiente",
    },
    {
      id: "e2",
      cliente: "Ejemplo 2",
      fecha: "2025-06-12",
      productos: ["NeoJabón Aloe Vera"],
      estado: "En preparación",
    },
  ];
}

export default function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    const cargarPedidos = () => setPedidos([...global.pedidosGlobal]);
    cargarPedidos();
    const interval = setInterval(cargarPedidos, 1000);
    return () => clearInterval(interval);
  }, []);

  const cambiarEstado = (id, nuevoEstado) => {
    const index = global.pedidosGlobal.findIndex((p) => p.id === id);
    if (index !== -1) {
      global.pedidosGlobal[index].estado = nuevoEstado;
    }
  };

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cliente}>
        <Icon name="person" size={18} /> {item.cliente}
      </Text>
      <Text>
        <Icon name="calendar-today" size={16} /> {item.fecha}
      </Text>
      <Text>
        <Icon name="inventory" size={16} /> Productos:{" "}
        {item.productos.join(", ")}
      </Text>

      {editandoId === item.id ? (
        <Picker
          selectedValue={item.estado}
          onValueChange={(valor) => cambiarEstado(item.id, valor)}
        >
          <Picker.Item label="Pendiente" value="Pendiente" />
          <Picker.Item label="En preparación" value="En preparación" />
          <Picker.Item
            label="Listo para entregar"
            value="Listo para entregar"
          />
          <Picker.Item label="Entregado" value="Entregado" />
        </Picker>
      ) : (
        <Text style={styles.estado}>
          <Icon name="assignment" size={16} /> Estado: {item.estado}
        </Text>
      )}

      <TouchableOpacity
        onPress={() => setEditandoId(editandoId === item.id ? null : item.id)}
      >
        <Icon name="edit" size={24} color="#00796B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedidos Recibidos</Text>
      <FlatList
        data={pedidos}
        renderItem={renderPedido}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay pedidos por mostrar.</Text>}
      />
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
    marginBottom: 15,
  },
  cliente: { fontSize: 16, fontWeight: "bold" },
  estado: { marginTop: 5, fontStyle: "italic" },
});
