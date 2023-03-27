import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {/* Icon */}
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        {/* Text */}
        <Text style={styles.optionText}>{item.name}</Text>
        {/* Icon */}
        <MaterialIcons
          name="keyboard-arrow-right"
          size={26}
          color="gray"
          marginLeft="auto"
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 20,
  },
});

export default MenuOption;
