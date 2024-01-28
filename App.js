import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import List from "./Components/List/List";
import LandingPage from "./Components/LandingPage/LandingPage";
import { theme } from "./Config";

const pages = ["landingPage", "listPage"];
const page = pages[0];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {page == pages[0] && <LandingPage />}
      {page == pages[1] && <List />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${page == pages[0] ? theme.backgroundColor : "white"}`,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
