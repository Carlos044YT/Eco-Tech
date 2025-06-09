import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Futuros_proyectos_Screen from "../components/Futuros_proyectos";
import DetalleFuturoProductoScreen from "../components/Futuros_proyectosDetalles";

const Stack = createNativeStackNavigator();

export default function PantallaMenuFuturos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Futuros_proyectos"
        component={Futuros_proyectos_Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Futuros_proyectosDetalles"
        component={DetalleFuturoProductoScreen}
        options={{ title: "Detalle del producto" }}
      />
    </Stack.Navigator>
  );
}
