import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={20} color="white" />  
        </View>
        <Image source={this.props.combo.caminhoImagem} style={styles.fotoProduto} />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>{this.props.combo.nomeProduto}</Text>
          <Text style={{color: "#777", fontSize: 14, textAlign: "center"}}>{this.props.combo.descricaoProduto}</Text>
          <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
            <Text style={{color: "#FF842B", fontWeight: "700", fontSize: 10}}>R$</Text>
            <Text style={{fontWeight: "700", fontSize: 25, color: "#333"}}>{this.props.combo.valor}</Text>
          </View>
        </View>
      </View>
    );
  }
}
