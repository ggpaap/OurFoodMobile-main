import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import styles from "./style";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={18} color="white" />
        </View>
        <Image
          source={this.props.sobremesa.caminhoImagem}
          style={styles.foto}
        />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>
            {this.props.sobremesa.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeProduto}>
              {this.props.sobremesa.valor}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
