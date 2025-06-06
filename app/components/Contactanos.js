import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
} from "react-native";

class Ventana6 extends Component {
  render() {
    const openWhatsApp = () => {
      const phoneNumber = "+524426099279"; // Usar el número con código de país
      const message =
        "Hola, quiero más información sobre como ser parte de EcoTech";
      const urlw = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      Linking.openURL(urlw);
    };
    const sendEmail = () => {
      const email = "vazquez.cuellar.carlos.45@cbtis118.edu.mx";
      const subject = "Consulta";
      const body =
        "Hola, me gustaría obtener más información sobre como ser parte de EcoTech";
      const urlg = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      Linking.openURL(urlg);
    };

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.bold}>¿Quieres ser parte del cambio?</Text>
          <Text style={styles.text}>
            {"\n"}
            {"\n"}
            Contáctanos y únete a EcoTech para transformar los residuos en
            oportunidades
            {"\n"}
          </Text>
          <View style={styles.contenedor}>
            <Image
              style={styles.iconow}
              source={require("../../assets/icon-llamada-whatsapp-psd-editable.png")}
            />
            <Text onPress={openWhatsApp} style={styles.texticonw}>
              442 609 9279
            </Text>
          </View>
          <View style={styles.contenedor}>
            <Image
              style={styles.iconog}
              source={require("../../assets/icono-gmail.png")}
            />
            <Text onPress={sendEmail} style={styles.texticong}>
              vazquez.cuellar.carlos.45{"\n"}@cbtis118.edu.mx
            </Text>
          </View>
        </View>
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
    backgroundColor: "fff",
  },
  container: {
    padding: 12,
    paddingTop: 120,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    textAlign: "center",
  },
  bold: {
    fontSize: 25,
    fontWeight: "bold",
  },
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconow: {
    height: 120,
    width: 120,
  },
  iconog: {
    height: 75,
    width: 75,
    marginRight: 20,
    marginLeft: 10,
  },
  texticonw: {
    paddingBottom: 12,
    paddingRight: 25,
    fontSize: 30,
    fontWeight: "bold",
  },
  texticong: {
    paddingBottom: 9,
    paddingRight: 25,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "darkgreen",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    textAlign: "center",
  },
});

export default Ventana6;
