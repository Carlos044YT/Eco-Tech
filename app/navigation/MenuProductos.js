import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductosScreen from "../components/Productos";
import DetalleProductoScreen from "../components/ProductosDetalles";

const Stack = createNativeStackNavigator();

export default function PantallaMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Productos"
        component={ProductosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductosDetalle"
        component={DetalleProductoScreen}
        options={{ title: "Detalle del producto" }}
      />
    </Stack.Navigator>
  );
}
