import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  categorias: {
    backgroundColor: "#fff",
    alignItens: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  produtos: {
    marginTop: 15,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    borderColor: "#FF842B",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 5,
    flexWrap: "wrap",
    height: 1300, //* veja bem
  },
  TextH2: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333"
  },
  produtosOfertas: {
    marginVertical: 15,
  },
  categoriasAleatorias: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",

  },
});

export default styles;
