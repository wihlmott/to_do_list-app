import { StyleSheet, View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { theme } from "../../../Config";

const ToDoItem = ({ todo }) => {
  const cardClicked = () => {
    console.log("card");
    //open modal
  };
  const doneClicked = () => {
    console.log("down");
  };
  const upClicked = () => {
    console.log("up");
  };
  const deleteTodo = () => {
    console.log("delete");
  };

  return (
    <Card
      onPress={cardClicked}
      mode="elevated"
      style={styles.cardStyle}
      key={todo.title}
    >
      <View style={{ flexDirection: "row" }}>
        <Card.Title
          style={styles.cardText}
          titleStyle={{
            color: "rgba(0,0,0,0.9)",
            textAlignVertical: "top",
            textShadowColor: theme.itemShadow,
            textShadowOffset: { width: 3, height: 2 },
            textShadowRadius: 15,
            textTransform: "capitalize",
            marginTop: -10,
          }}
          titleVariant="titleMedium"
          title={todo.title}
          subtitleStyle={{ textAlignVertical: "top", marginTop: -3 }}
          subtitleVariant="bodySmall"
          subtitle={todo.details}
        />
        <Card.Actions style={styles.downArrow}>
          {!todo.status && (
            <IconButton
              onPress={doneClicked}
              icon="arrow-down"
              size={20}
              color="grey"
            />
          )}
          {todo.status && (
            <>
              <IconButton
                style={styles.iconStyles}
                onPress={upClicked}
                icon="arrow-up"
                size={20}
              />
              <IconButton
                style={styles.iconStyles}
                onPress={deleteTodo}
                icon="delete"
                size={20}
              />
            </>
          )}
        </Card.Actions>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 60,
    marginHorizontal: 15,
    marginBottom: 11,
    shadowColor: "grey",
  },
  cardText: { flex: 1 },
  downArrow: {
    height: 60,
  },
  iconStyles: { borderWidth: 1 },
});

export default ToDoItem;
