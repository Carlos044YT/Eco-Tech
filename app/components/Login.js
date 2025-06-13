import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.bold}>Login</Text>
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

export default LoginScreen;
