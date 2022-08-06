import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.container}>
      <Text>{item.text}</Text>
      <MaterialIcons
        name="delete"
        color="#0e132b"
        onPress={() => pressHandler(item.key)}
        size={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#0e132b",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
  },
});
