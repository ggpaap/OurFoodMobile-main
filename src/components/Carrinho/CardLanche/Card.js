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
        <Image
          source={this.props.lanche.caminhoImagem}
          style={styles.fotoCategoria}
        />
        <View style={styles.infos}>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.nomeCategoria}>
              {this.props.lanche.nomeProduto}
            </Text>
            <Text style={{ color: "#777", fontSize: 14 }}>
              {this.props.lanche.descricaoProduto}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "absolute",
              right: 0,
              bottom: 0,
              gap: 10,
            }}
          >
            <View style={{flexDirection: "row"}}>
              <Text style={{ color: "#FF842B" }}>R$</Text>
              <Text style={styles.nomeCategoria}>
                {this.props.lanche.valor}
              </Text>
            </View>
            <View style={styles.btn}>
              <Text style={{ color: "white", fontWeight: "600" }}>3 Unid.</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
