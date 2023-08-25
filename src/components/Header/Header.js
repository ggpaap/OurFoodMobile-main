import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerPrincipal}>
        <Text style={styles.nomeLoja}>OURFOOD</Text>
        <View style={styles.icones}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.carrinhoText}>0</Text>
            <View style={styles.btnCart}>
              <MaterialCommunityIcons name="cart-outline" size={20} color="#FF842B" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
