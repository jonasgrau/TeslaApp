import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";

export default function App() {
  const bottomSheetRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => bottomSheetRef.current.open()}
        >
          <Text style={styles.buttonText}>Route</Text>
        </TouchableOpacity>
        <BottomSheet
          ref={bottomSheetRef}
          height={200}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>Bottom Sheet Content</Text>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text>Close Bottom Sheet</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  floatingButton: {
    backgroundColor: "#E82127",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 60,
    borderRadius: 10,
    elevation: 8,
    marginBottom: 16,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: "1",
  },
  buttonText: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: 600,
  },
});
