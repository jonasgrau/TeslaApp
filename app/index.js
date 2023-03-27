import { StyleSheet, View, Image, FlatList, StatusBar } from "react-native";
import menuOptions from "../assets/menuOptions";
import car from "../assets/images/car.png";
import MenuOption from "../components/menuOption";
import Controls from "../components/controls";
import Header from "../components/header";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Image source={car} style={styles.image} resizeMode="contain" />
      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "30%",
  },
});
