import { View, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import BottomSheet from "../components/bottomSheet";

const LocationScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.756928,
            longitude: 9.258865,
            latitudeDelta: 0.025,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: 48.756928, longitude: 9.258865 }} />
        </MapView>
      </View>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <BottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#161818",
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
  map: {
    width: "100%",
    height: "100%",
  },
});

export default LocationScreen;
