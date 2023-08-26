import { createStackNavigator } from '@react-navigation/stack';
import Carrinho from "./pages/Carrinho/index"
import Perfil from "./pages/Perfil/index"
const HeaderRoutes = createStackNavigator();

function HeaderRoutes() {
  return (
    <HeaderRoutes.Navigator>
      <HeaderRoutes.Screen name="Carrinho" component={Carrinho} />
      <HeaderRoutes.Screen name="Perfil" component={Perfil} />
    </HeaderRoutes.Navigator>
  );
} 