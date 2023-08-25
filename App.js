import { StyleSheet, View, Text } from "react-native";
import Header from "./src/components/Header/Header";
import { ScrollView } from "react-native";
import Main from "./src/components/Main/Main";
import Nav from "./src/components/Nav/Nav";

export default function App() {
  return (
    <View style={styles.body}>
      <Header />
      <ScrollView>
        <Nav />
        <Main />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 35,
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
});
