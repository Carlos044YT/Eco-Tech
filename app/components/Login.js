import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { login } = useAuth();

  // Simulación de usuarios (puedes cambiar esto por tu consulta a base de datos)
  const usuarios = [
    { correo: "admin@correo.com", contrasena: "admin123", rol: "admin" },
    { correo: "cliente@correo.com", contrasena: "cliente123", rol: "cliente" },
  ];

  const iniciarSesion = () => {
    const usuario = usuarios.find(
      (u) => u.correo === correo && u.contrasena === contrasena
    );

    if (usuario) {
      login(usuario); // guardar usuario en el contexto
      Alert.alert("¡Bienvenido!", `Sesión iniciada como ${usuario.rol}`);
      navigation.navigate("Sobre Nosotros"); // redirige
    } else {
      Alert.alert("Error", "Correo o contraseña incorrectos");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Iniciar Sesión
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={iniciarSesion}
        style={{
          backgroundColor: "#007bff",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
