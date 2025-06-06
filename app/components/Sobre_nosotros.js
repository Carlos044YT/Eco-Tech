import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";

class Ventana1 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>
              EcoTech nació durante el quinto semestre de preparatoria, cuando
              una charla en clase nos hizo reflexionar profundamente sobre el
              impacto ambiental de nuestras actividades cotidianas. Uno de los
              temas que más nos marcó fue la gran cantidad de residuos plásticos
              que se generan diariamente en el CBTis 118. Fue entonces cuando
              comprendimos que el cambio debía empezar por nosotros mismos.
              {"\n"}
              {"\n"}Lo que inicialmente fue una inquietud, pronto se transformó
              en una propuesta concreta. Gracias a los conocimientos adquiridos
              en el aula y al respaldo de la iniciativa PAEC, decidimos
              desarrollar un proyecto con metas claras y ambiciosas. Así nació
              EcoTech, con el propósito de generar un cambio real y sostenible.
              {"\n"}
              {"\n"}Nuestro proyecto se basa en tres metas fundamentales:
            </Text>
            <Text style={styles.bold}>
              {"\n"}1-Dar a conocer EcoTech y sensibilizar a la comunidad:
            </Text>
            <Text style={styles.text}>
              Queremos que más personas conozcan nuestra iniciativa y se sumen
              al cambio. Creemos que la educación ambiental y la difusión de
              ideas sostenibles son claves para transformar la forma en que se
              perciben los residuos.
            </Text>
            <Text style={styles.bold}>
              {"\n"}2-Reducir la generación de residuos:
            </Text>
            <Text style={styles.text}>
              Nuestra meta no es solo crear conciencia, sino influir
              directamente en la forma en que se gestionan los residuos, tanto
              en nuestra escuela como en la comunidad. Promovemos prácticas de
              reducción, reutilización y reciclaje, enfocándonos principalmente
              en los residuos plásticos.
            </Text>
            <Text style={styles.bold}>{"\n"}3-Monetizar los residuos:</Text>
            <Text style={styles.text}>
              Creemos firmemente que los residuos no deben ser vistos como
              basura, sino como recursos con valor. Al crear sistemas para
              recolectar, clasificar y dar un segundo uso a estos materiales,
              demostramos que la sostenibilidad también puede ser económicamente
              viable. Como decimos en EcoTech:
              <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                la basura de unos puede convertirse en el tesoro de otros.
              </Text>
            </Text>
          </View>
        </ScrollView>
        <Text style={styles.footer}>
          {"\n"}© 2025 EcoTech - Todos los derechos reservados
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 12,
    paddingTop: 70,
    bottom: 50,
  },
  text: {
    fontSize: 17,
    textAlign: "justify",
  },
  bold: {
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "bold",
    color: "green",
  },
  footer: {
    backgroundColor: "darkgreen",
    color: "white",
    fontWeight: "bold",
    height: 60,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
  },
});

export default Ventana1;
