import Home from "./src/pages/Home/index";
import Header from "./src/components/Header/Header";
import Carrinho from "./src/pages/Carrinho/index";
import Pagamento from "./src/pages/Pagamento/index";
import Pix from "./src/pages/Pagamento/pix";
import Dinheiro from "./src/pages/Pagamento/dinheiro";
import Cartao from "./src/pages/Pagamento/cartao";
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="PIX" component={Pix} />
        <Stack.Screen name="Dinheiro" component={Dinheiro} />
        <Stack.Screen name="Cartao" component={Cartao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
