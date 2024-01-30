import { useState } from "react";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import { theme } from "../Config";

const NewList = ({ closeModal }) => {
  const [listName, setListName] = useState();

  const nameList = () => {
    console.log(listName); //set to db
    setListName("");
    closeModal();
  };

  const closeModalHandler = () => closeModal();

  return (
    <Portal>
      <Modal
        visible={true}
        onDismiss={closeModalHandler}
        contentContainerStyle={{
          backgroundColor: "white",
          paddingTop: 25,
          paddingHorizontal: 25,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <TextInput
          mode="outlined"
          label={"New List"}
          value={listName}
          outlineColor={theme.backgroundColor2}
          activeOutlineColor={theme.backgroundColor2}
          onChangeText={(e) => {
            setListName(e);
          }}
        />
        <Button
          mode="contained"
          style={{ margin: 20, marginHorizontal: 35 }}
          onPress={nameList}
          buttonColor={theme.backgroundColor2}
        >
          create list
        </Button>
      </Modal>
    </Portal>
  );
};

export default NewList;
