import { ButtonCustom } from "@/src/components/buttonCustom";
import { InputCustom } from "@/src/components/inputCustom";
import { colors } from "@/src/utils/colors";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { loginApi } from "@/src/server/config";

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
    });
  };

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
