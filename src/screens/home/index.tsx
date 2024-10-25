import { CardDog } from "@/src/components/cardDogs";
import { getAllDogs } from "@/src/server/config";
import { colors } from "@/src/utils/colors";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const HomeScreen = () => {
  const [dogs, setDogs] = useState([]);
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    await getAllDogs().then((response) => {
      setDogs(response.data);
      console.log("response api", response);
    });
  };

  const handleMatch = () => {
    setMatch((prevData) => [...prevData, dogs[0]]);
    setDogs((prevData) => prevData.slice(1));
  };

  const handlePressNo = () => {
    setDogs((prevData) => prevData.slice(1));
  };

  return (
    <View style={styles.container}>
      <CardDog imagem={dogs[0]?.image[0]} />

      <View style={styles.contentButtons}>
        <TouchableOpacity
          style={styles.styleButton}
          onPress={() => handlePressNo()}
        >
          <AntDesign name="close" size={24} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.styleButton}
          onPress={() => handleMatch()}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  styleButton: {
    height: 70,
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
