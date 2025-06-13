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
          <Text style={styles.text}>
            La sección Futuros Proyectos es un espacio donde compartimos de
            manera anticipada los desarrollos que están por realizarse. Estos
            proyectos pueden surgir tanto de nuestras propias iniciativas como
            de sugerencias valiosas de la comunidad. {"\n"}
            {"\n"}Cada propuesta que aparece en esta sección ya ha sido
            confirmada y programada para su desarrollo, lo que significa que no
            es una simple idea o posibilidad es un compromiso real.{"\n"}
            {"\n"}Aquí podrás conocer de primera mano los productos o servicios
            que están en camino, tener una visión anticipada de lo que viene y,
            en muchos casos, incluso involucrarte aportando ideas o mejoras
            antes del lanzamiento. Con Futuros Proyectos, buscamos mantener una
            comunicación abierta, fomentar la participación activa de nuestra
            comunidad y asegurar que cada paso que damos tenga un propósito
            claro y compartido.{"\n"}
          </Text>
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
  text: {
    fontWeight: "none",
    fontSize: 17,
    textAlign: "justify",
  },
});
