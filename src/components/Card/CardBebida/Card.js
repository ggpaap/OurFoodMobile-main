import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { View, Image } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={18} color="white" />
        </View>
        <Image
          source={this.props.bebida.caminhoImagem}
          style={styles.fotoCategoria}
        />
        <View style={styles.infos}>
          <Text style={styles.nomeCategoria}>
            {this.props.bebida.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeCategoria}>{this.props.bebida.valor}</Text>
          </View>
        </View>
      </View>
    );
  }
}
