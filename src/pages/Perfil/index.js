import { StyleSheet, View, Text } from "react-native";

export default function Home({  }) {
  return (
    <View style={styles.body}>
      <Text>olá mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
});
