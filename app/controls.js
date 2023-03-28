import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const ControlsScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>controls</Text>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
});

export default ControlsScreen;
