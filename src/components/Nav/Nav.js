import { View, TextInput, Text } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

function Card(props) {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons
        name={props.categoria.icon}
        size={24}
        color="#333"
      />
      <View style={styles.infos}>
          <Text style={styles.nomeCategoria}>{props.categoria.nome}</Text>
      </View>
    </View>
  );
}
function Pesquisa() {
  return (
    <View style={styles.pesquisaView}>
      <TextInput style={styles.input} placeholder="Pesquisa" />
      <View style={styles.btnSearch}>
        <AntDesign name="search1" size={20} color="white" />
      </View>
    </View>
  );
}

export default function Nav() {
  const categorias = [
    {
      nome: "Lanches",
      icon: "hamburger",
    },
    {
      nome: "Bebidas",
      icon: "beer",
    },
    {
      nome: "Sobremesas",
      icon: "candy",
    },
  ];
  return (
    <View style={styles.nav}>
      <Pesquisa />
      <View style={styles.categorias}>
        {categorias.map((categoria) => (
          <Card key={categoria.nome} categoria={categoria} />
        ))}
      </View>
    </View>
  );
}
