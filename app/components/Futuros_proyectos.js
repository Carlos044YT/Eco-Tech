// screens/ProductosScreen.js
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const productos_futuro = [
  {
    id: "1",
    nombre: "Cofre de Minecraft",
    imagen: require("../../assets/Cofre_minecraft.jpg"),
    descripcion: "Hacerlo a vase de botellas de plastico",
  },
  // Agrega más productos según necesites
];

export default function Futuros_proyectos_Screen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Button
        color="green"
        title="Más información"
        onPress={() =>
          navigation.navigate("Futuros_proyectosDetalles", {
            productos_futuro: item,
          })
        }
      />
    </View>
  );

  return (
    <FlatList
      data={productos_futuro}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
      ListHeaderComponent={
        <View style={styles.contenido}>
          <Text>Xddddd</Text>
        </View>
      }
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
