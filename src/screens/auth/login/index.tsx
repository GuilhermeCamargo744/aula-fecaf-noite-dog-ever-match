import { ButtonCustom } from "@/src/components/buttonCustom";
import { InputCustom } from "@/src/components/inputCustom";
import { colors } from "@/src/utils/colors";
import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { loginApi } from "@/src/server/config";
import { getToken, storageToken } from "@/src/utils/asyncStorage/loginStorage";

export const LoginScreen = () => {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const handleLogin = () => {
    const payload = {
      email: valueEmail,
      password: valuePassword,
    };

    loginApi(payload).then((response) => {
      console.log("response", response);
      if (response?.data?.token) {
        storageToken(response.data.token);
      } else {
        Alert.alert("Tente novamente", "Houve um erro interno");
      }
    });
  };

  const value = async () => {
    return await getToken();
  };

  console.log("TOKEEEEEnnn", value);

  return (
    <View style={styles.container}>
      <Text style={styles.styleTitle}>DogEverMatch</Text>
      <InputCustom title="E-mail" onChangeText={setValueEmail} />

      <InputCustom title="Senha" onChangeText={setValuePassword} />
      <ButtonCustom
        title="Entrar"
        styleContainer={{
          backgroundColor: colors.PRIMARY,
          position: "absolute",
          bottom: 32,
        }}
        styleText={{
          color: colors.WHITE,
        }}
        onPress={handleLogin}
      />
    </View>
  );
};
