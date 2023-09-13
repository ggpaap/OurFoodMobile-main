import { View, ScrollView, TouchableOpacity } from "react-native";
import CardCombo from "../Card/CardCombo/Card";
import React, { Component } from "react";
import CardLanche from "../Card/CardLanche/Card";
import CardSobremesa from "../Card/CardSobremesa/Card";
import CardBebida from "../Card/CardBebida/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import { Text, Button, List } from 'react-native-paper';

import produtoService from '../../../services/produtos';
import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

export default function Main({}) {
  
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data)
  };

  useEffect(async () => {
    getProdutos();
  }, []);

  const updateProdutos = async () => {
    await getProdutos()
  }

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Produtos: </Text>
      {produtos.map((produto) => (
        <List.Item key={produto.id} title={produto.titulo} />
      ))}
      <Button title="Atualizar" icon="reload" mode="elevated" onPress={() => updateProdutos()} />
      <StatusBar style="auto" />
    </View>
  );
}
