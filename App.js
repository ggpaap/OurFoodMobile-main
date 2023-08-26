import Home from "./src/pages/Home/index";
import Carrinho from "./src/pages/Carrinho/index";
import Header from "./src/components/Header/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
