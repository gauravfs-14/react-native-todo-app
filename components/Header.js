import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ComputeNepal's TODO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    justifyContent: "center",
    backgroundColor: "#0e132b",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
