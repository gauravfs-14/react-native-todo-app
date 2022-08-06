import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prev) => {
      return [{ text: text, key: Date.now().toString() }, ...prev];
    });
  };
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header />
      <View style={styles.content}>
        {/* to form  */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      {/* <StatusBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 30,
  },
});
