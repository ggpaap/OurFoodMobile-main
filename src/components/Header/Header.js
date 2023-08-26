import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.headerPrincipal}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.nomeLoja}>OURFOOD</Text>
        </TouchableOpacity>
        <View style={styles.icones}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={styles.carrinhoText}>0</Text>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={() => navigation.navigate("Carrinho")}
            >
              <MaterialCommunityIcons
                name="cart-outline"
                size={20}
                color="#FF842B"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 10 }}
                source={require("../../../assets/img/rafa.jpeg")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
