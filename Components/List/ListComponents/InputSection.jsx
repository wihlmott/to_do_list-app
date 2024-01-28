import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

const InputSection = ({ handleInput }) => {
  const [input, setInput] = useState("");

  const submit = () => {
    handleInput(input);
    setInput("");
  };

  return (
    <View style={styles.input}>
      <TextInput
        value={input}
        label={"insert to do..."}
        mode="outlined"
        style={styles.inputText}
        onChangeText={(text) => setInput(text)}
      />
      <IconButton
        style={styles.submit}
        icon="check"
        size={20}
        iconColor="black"
        onPress={submit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    width: "100%",
    marginTop: -2,
    marginLeft: 5,
  },
  inputText: { flex: 1, backgroundColor: "white" },
  submit: { paddingTop: 10 },
});

export default InputSection;
