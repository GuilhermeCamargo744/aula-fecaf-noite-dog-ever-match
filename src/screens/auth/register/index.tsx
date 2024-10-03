import { InputCustom } from "@/src/components/inputCustom";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonCustom } from "@/src/components/buttonCustom";

export const RegisterScreen = () => {
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueConfirmPassword, setValueConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView style={{ height: "100%", width: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.styleTitle}>DogEverMatch</Text>
        <ScrollView
          style={styles.contentInputs}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <InputCustom title="Nome:" onChangeText={setValueName} />
          <InputCustom title="E-mail:" onChangeText={setValueEmail} />
          <InputCustom title="Senha:" onChangeText={setValuePassword} />
          <InputCustom
            title="Confirmar senha:"
            onChangeText={setValueConfirmPassword}
          />
        </ScrollView>
        <ButtonCustom
          onPress={() => {}}
          title="Cadastrar"
          styleContainer={{
            position: "absolute",
            bottom: 32,
            width: "90%",
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
