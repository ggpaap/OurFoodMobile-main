import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import CardCombo from "../Card/CardCombo/Card";
import React, { Component } from "react";
import CardLanche from "../Card/CardLanche/Card";
import CardSobremesa from "../Card/CardSobremesa/Card";
import CardBebida from "../Card/CardBebida/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import { Text, Button, List } from "react-native-paper";

import produtoService from "../../../services/produtos";
import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

export default function Main({}) {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  };

  useEffect(async () => {
    getProdutos();
  }, []);

  const updateProdutos = async () => {
    await getProdutos();
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Lanches: </Text>

      <View style={{ display: "flex", flexDirection: "row" }}>
        {produtos.map((produto) => (
          // <List.Item key={produto.id} title={produto.titulo}  />

          <View key={produto.id}>
            <Text>{produto.titulo}</Text>
            <Image
              key={produto.id}
              source={{ uri: produto.capa.file }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        ))}
      </View>
      <Button
        title="Atualizar"
        icon="reload"
        mode="elevated"
        onPress={() => updateProdutos()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
