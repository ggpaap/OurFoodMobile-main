import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function MenuCard(props) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "#444" }}>{props.opcao}</Text>
      <FontAwesome name="arrow-right" size={19} color="#FF842B" />
    </View>
  );
}
export default function Perfil({  }) {
  return (
    <View style={styles.body}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF842B" }}>Olá RafaAlbano!</Text>
        <Text style={{ fontWeight: "500", fontSize: 16, color: "#333" }}>Aqui estão mais informações para você</Text>
      </View>
      <View style={{gap: 10, marginTop: 20}}>
        <MenuCard opcao="Favoritos" />
        <MenuCard opcao="Pedidos" />
        <MenuCard opcao="Pagamentos" />
        <MenuCard opcao="Endereços" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 40,
  },
});
