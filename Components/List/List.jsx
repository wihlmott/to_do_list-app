import ToDoList from "./ListComponents/ToDoList";
import CompletedList from "./ListComponents/CompletedList";
import InputSection from "./ListComponents/InputSection";
import { useEffect, useState } from "react";
import { Divider } from "react-native-paper";
import Header from "../Header/Header";

const List = () => {
  const [todos, setTodos] = useState([
    { title: "first", details: "stuff", status: false },
    { title: "second", details: "other", status: false },
  ]);

  const [completedTodos, setCompletedTodos] = useState([
    { title: "done", details: "things", status: true },
  ]);

  const handleInput = (e) =>
    setTodos((prev) => [{ title: e, details: "empty" }, ...prev]);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos, completedTodos]);

  return (
    <>
      <Header listName={"random"} />
      <ToDoList todos={todos} />
      <Divider />
      <CompletedList completedTodos={completedTodos} />
      <InputSection handleInput={handleInput} />
    </>
  );
};

export default List;
