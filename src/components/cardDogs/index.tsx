import { Image, StyleSheet, View } from "react-native";

interface IProps {
  imagem: string;
}

export const CardDog = ({ imagem }: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imagem }}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 8,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
