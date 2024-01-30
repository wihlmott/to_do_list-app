import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import List from "./Components/List/List";
import LandingPage from "./Components/LandingPage/LandingPage";
import { theme } from "./Config";
import NewList from "./Components/NewList";
import { PaperProvider } from "react-native-paper";

const pages = ["landingPage", "listPage"];
const page = pages[0];

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {page == pages[0] && <LandingPage />}
        {/* {page == pages[1] && <List />} */}
      </SafeAreaView>
    </PaperProvider>
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
