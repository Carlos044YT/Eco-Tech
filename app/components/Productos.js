// screens/ProductosScreen.js
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const productos = [
  {
    id: "1",
    nombre: "Botella reciclada",
    imagen: require("../../assets/botella.jpg"),
    descripcion: "Botella hecha con PET 100% reciclado.",
  },
  {
    id: "2",
    nombre: "Maceta ecológica",
    imagen: require("../../assets/maceta.jpg"),
    descripcion: "Maceta biodegradable y sostenible.",
  },
  // Agrega más productos según necesites
];

export default function ProductosScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Button
        color="green"
        title="Más información"
        onPress={() =>
          navigation.navigate("ProductosDetalle", { producto: item })
        }
      />
    </View>
  );

  return (
    <FlatList
      data={productos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  imagen: {
    width: "100%",
    height: 400,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
