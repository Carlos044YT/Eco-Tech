import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

class Ventana1 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Mi chander reactión:</Text>
        <Image
          style={styles.tyniicon}
          source={require("../../assets/icon.png")}
        />
        <Button
          color="blue"
          title="Puchale"
          onPress={() => console.log("Boton presionado")}
        />
        <Button
          color="black"
          title="Virus?"
          onPress={() => alert("Te instalaron un virus")}
        />
        <Button
          color="green"
          title="Decide"
          onPress={() =>
            Alert.alert("Tu destino", "Píldora Azul o Roja", [
              { text: "Azul", onPress: () => console.log("Azul") },
              { text: "Roja", onPress: () => console.log("Roja") },
            ])
          }
        />
        {Platform.OS === "ios" && (
          <Button
            color="pink"
            title="Cuenta chisme"
            onPress={() =>
              Alert.prompt("Chismes", "Cuenta tu mayor secreto", (text) =>
                console.log(text)
              )
            }
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tyniicon: {
    height: 100,
    width: 100,
  },
});

export default Ventana1;
