// screens/ProductosScreen.js
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  Linking,
} from "react-native";

const productos_Tuto = [
  {
    id: "1",
    nombre: "Lapicero",
    imagen: require("../../assets/Repo.jpeg"),
    url: "https://youtu.be/Pdx_QfVdlJQ",
  },
  {
    id: "2",
    nombre: "Joyero",
    imagen: require("../../assets/Joyero.jpeg"),
    url: "https://youtu.be/SmenaZwcV10",
  },
  // Agrega más productos según necesites
];

export default function Hazlo_por_ti_Screen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Button
        color="green"
        title="Tutorial"
        onPress={() => {
          Linking.openURL(item.url);
        }}
      />
    </View>
  );

  return (
    <FlatList
      data={productos_Tuto}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
      ListHeaderComponent={
        <View style={styles.contenido}>
          <Text style={styles.text}>
            Hazlo por ti es una dinámica pensada para motivar a los alumnos a
            crear por sí mismos productos reutilizables, siempre que esté dentro
            de sus posibilidades. El objetivo principal es fomentar la
            conciencia sobre el reciclaje, dándoles las herramientas e ideas
            para transformar materiales{" "}
            <Text style={styles.bold}>especialmente plásticos </Text>
            en objetos útiles y creativos.
          </Text>

          <Text style={styles.text}>
            {"\n"}La mayoría de los productos que usamos a diario están hechos
            de plástico. A través de esta iniciativa, buscamos que los
            estudiantes reconozcan el valor de reutilizar esos materiales y así
            contribuyan de forma activa al cuidado del medio ambiente.
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
  contenido: {
    padding: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "justify",
  },
  text: {
    fontWeight: "none",
    fontSize: 17,
    textAlign: "justify",
  },
});
