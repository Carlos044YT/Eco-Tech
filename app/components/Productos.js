// screens/ProductosScreen.js
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const productos = [
  {
    id: "1",
    nombre: "Lapicero",
    imagen: require("../../assets/Repo.jpeg"),
    descripcion: "Hecho con envases de plastico",
  },
  {
    id: "2",
    nombre: "Joyero",
    imagen: require("../../assets/Joyero.jpeg"),
    descripcion: "Hecho con contenedores de plastico",
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
