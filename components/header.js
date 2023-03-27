import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My Model S</Text>
        <View style={styles.battery}>
          <FontAwesome name="battery-three-quarters" size={20} color="gray" />
          <Text style={styles.batterytext}>510 km</Text>
        </View>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <FontAwesome name="user-circle" size={30} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    fontWeight: 600,
    marginTop: 8,
  },
  battery: {
    flexDirection: "row",
    marginTop: 4,
  },
  batterytext: {
    fontSize: 16,
    color: "gray",
    fontWeight: 500,
    marginLeft: 7,
  },
});

export default Header;
