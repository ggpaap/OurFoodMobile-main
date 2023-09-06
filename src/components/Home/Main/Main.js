import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CardCombo from "../Card/CardCombo/Card";
import React, { Component } from "react";
import CardLanche from "../Card/CardLanche/Card";
import CardSobremesa from "../Card/CardSobremesa/Card";
import CardBebida from "../Card/CardBebida/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import produtoService from '../../../services/produtos';
import { useEffect, useState } from 'react';

export default function Main({}) {
  
  const [produtos, setProdutos] = useState([]);
  useEffect(async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  }, []);

  async function updateProdutos() {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  }


  const navigation = useNavigation();
  const combos = [
    {
      id: 1,
      nomeProduto: "Mega combo Ourfoodq",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 2,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 3,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
  ];
  const lanches = [
    {
      id: 1,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 2,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 3,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
  ];
  const bebidas = [
    {
      id: 1,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 2,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 3,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
  ];
  const sobremesas = [
    {
      id: 1,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 2,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
    {
      id: 3,
      nomeProduto: "Mega combo Ourfood",
      valor: 30,
      caminhoImagem: require("../../../../assets/img/images.jpeg"),
      descricaoProduto: "Beef Burger, batata frita e refrigerante",
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Produtos: </Text>
      {produtos.map((produto) => (
        <Text key={produto.id}>{produto.name}</Text>
      ))}
      <Button title="Atualizar" onPress={() => updateProdutos()} />
      <StatusBar style="auto" />
    </View>


    // <View style={styles.main}>
    //   <View>
    //     <View style={styles.categorias}>
    //       <View
    //         style={{ flexDirection: "row", justifyContent: "space-between" }}
    //       >
    //         <Text style={styles.TextH2}>Combos</Text>
    //         <TouchableOpacity onPress={() => navigation.navigate("Combos")}>
    //           <View
    //             style={{ flexDirection: "row", alignItems: "center", gap: 7 }}
    //           >
    //             <MaterialCommunityIcons
    //               name="arrow-right-bold-box"
    //               size={20}
    //               color="#FF842B"
    //             />
    //             <Text
    //               style={{
    //                 color: "#FF842B",
    //                 fontSize: 15,
    //                 fontWeight: "600",
    //               }}
    //             >
    //               Ver todos
    //             </Text>
    //           </View>
    //         </TouchableOpacity>
    //       </View>
    //       <ScrollView horizontal={true}>
    //         {combos.map((combo) => (
    //           <CardCombo key={combo.id} combo={combo} />
    //         ))}
    //       </ScrollView>
    //     </View>
    //     <View style={styles.categorias}>
    //       <View
    //         style={{ flexDirection: "row", justifyContent: "space-between" }}
    //       >
    //         <Text style={styles.TextH2}>Lanches</Text>
    //       </View>
    //       <ScrollView horizontal={true}>
    //         {lanches.map((lanche) => (
    //           <CardLanche key={lanche.id} lanche={lanche} />
    //         ))}
    //       </ScrollView>
    //     </View>
    //     <View style={styles.categorias}>
    //       <View
    //         style={{ flexDirection: "row", justifyContent: "space-between" }}
    //       >
    //         <Text style={styles.TextH2}>Bebidas</Text>
    //       </View>
    //       <ScrollView horizontal={true}>
    //         {bebidas.map((bebida) => (
    //           <CardBebida key={bebida.id} bebida={bebida} />
    //         ))}
    //       </ScrollView>
    //     </View>
    //     <View style={styles.categorias}>
    //       <View
    //         style={{ flexDirection: "row", justifyContent: "space-between" }}
    //       >
    //         <Text style={styles.TextH2}>Sobremesas</Text>
    //       </View>
    //       <ScrollView horizontal={true}>
    //         {sobremesas.map((sobremesa) => (
    //           <CardSobremesa key={sobremesa.id} sobremesa={sobremesa} />
    //         ))}
    //       </ScrollView>
    //     </View>
    //   </View>
    // </View>
  );
}
