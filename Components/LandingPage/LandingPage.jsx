import { View, StyleSheet } from "react-native";
import { Divider, IconButton, Surface, Text } from "react-native-paper";

import { theme } from "../../Config";

const lists = [{ title: "list's name" }];

const LandingPage = () => {
  const addListHandler = () => {
    console.log("create new list");
  };

  return (
    <>
      <View style={styles.topView}>
        <Text>text</Text>
      </View>
      <Surface style={styles.middleView}>
        <Text variant="headlineMedium" style={styles.listsText}>
          lists
        </Text>
        <Divider />
        {lists.map((list, i) => {
          return (
            <>
              <Text
                key={list.title}
                style={styles.listElement}
                onPress={() => {
                  console.log(list.title);
                }}
              >
                {`${i + 1}. ${list.title}`}
              </Text>
              <Divider />
            </>
          );
        })}
        <IconButton
          icon="plus-circle-outline"
          size={50}
          iconColor={theme.blue}
          style={styles.addBtn}
          onPress={addListHandler}
        />
      </Surface>
      <View style={styles.bottomView}></View>
    </>
  );
};

const styles = StyleSheet.create({
  topView: { flex: 0.2 },
  middleView: { flex: 0.8, width: "80%", borderRadius: 10 },
  bottomView: { flex: 0.1 },
  listsText: {
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: theme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  listElement: { margin: 10, textTransform: "capitalize", fontSize: 17 },
  addBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 12,
  },
});

export default LandingPage;
