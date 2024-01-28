import { Appbar, Divider } from "react-native-paper";

const Header = ({ listName }) => {
  const backHandler = () => {
    console.log("go back");
  };
  const openCode = () => {
    console.log("open code");
  };
  const shareHandler = () => {
    console.log("send link to list");
  };

  return (
    <>
      <Appbar style={{ height: 50 }}>
        <Appbar.BackAction onPress={backHandler} />
        <Appbar.Content title={listName} />
        <Appbar.Action icon="lock-open-alert" onPress={openCode} />
        <Appbar.Action icon="share" onPress={shareHandler} />
      </Appbar>
      <Divider />
    </>
  );
};

export default Header;
