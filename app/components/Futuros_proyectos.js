import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Platform,
  StatusBar,
} from "react-native";

class Ventana5 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Ventana 2</Text>
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
});

export default Ventana5;
