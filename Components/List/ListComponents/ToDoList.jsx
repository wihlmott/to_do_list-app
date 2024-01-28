import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }) => {
  return (
    <ScrollView style={styles.todoList}>
      <Text variant="bodySmall">to do...</Text>
      {todos.map((todo) => {
        return <ToDoItem todo={todo} key={todo.title} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: { width: "100%", backgroundColor: "#E9ECEE" },
});

export default ToDoList;
