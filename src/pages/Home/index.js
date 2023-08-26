import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Main from "../../components/Home/Main/Main";
import Nav from "../../../src/components/Nav/Nav";
import Header from "../../../src/components/Header/Header";

export default function Home() {
  return (
    <View style={styles.body}>
      <ScrollView>
        <Nav />
        <Main />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
});
