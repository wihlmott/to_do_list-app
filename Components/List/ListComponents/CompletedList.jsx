import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import ToDoItem from "./ToDoItem";

const CompletedList = ({ completedTodos }) => {
  return (
    <ScrollView style={styles.completedList}>
      <Text variant="bodySmall">completed</Text>
      {completedTodos.map((todo) => {
        return <ToDoItem todo={todo} key={todo.title} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  completedList: {
    flex: 0.8,
    width: "100%",
    backgroundColor: "#E9ECEE",
  },
});

export default CompletedList;
