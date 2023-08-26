import { createStackNavigator } from '@react-navigation/stack';
import Carrinho from "./pages/Carrinho/index";
import Perfil from "./pages/Perfil/index";
import Home from "./pages/Home/index";
import Header from "./components/Header/Header";

const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

function HeaderRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HeaderRoutes" component={HeaderRoutes} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
