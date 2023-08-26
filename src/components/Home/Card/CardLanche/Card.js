import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
          source={this.props.lanche.caminhoImagem}
          style={styles.fotoCategoria}
        />
        <View style={styles.infos}>
          <Text style={styles.nomeCategoria}>
            {this.props.lanche.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeCategoria}>{this.props.lanche.valor}</Text>
          </View>
        </View>
      </View>
    );
  }
}
