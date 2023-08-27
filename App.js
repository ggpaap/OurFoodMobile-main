import Home from "./src/pages/Home/index";
import Header from "./src/components/Header/Header";
import Carrinho from "./src/pages/Carrinho/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function app() {
  const CustomHeader = () => <Header />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: CustomHeader,
        }}
      >
        <Stack.Screen name="Home" component={Home} />a
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
