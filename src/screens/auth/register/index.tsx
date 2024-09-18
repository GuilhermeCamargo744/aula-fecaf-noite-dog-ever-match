import { InputCustom } from "@/src/components/inputCustom"
import { useState } from "react"
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native"
import { styles } from "./styles"
import { ButtonCustom } from "@/src/components/buttonCustom"



export const RegisterScreen = () => {
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valueConfirmPassword, setValueConfirmPassword] = useState('')

    return(
      <View style={styles.container}>
      <ScrollView>
          <Text>DogEverMatch</Text> 
          <View style={styles.contentInputs}>
            <InputCustom
                  title="Nome:"
                  onChangeText={setValueName}
              /> 
              <InputCustom
                  title="E-mail:"
                  onChangeText={setValueEmail}
              /> 
              <InputCustom
                  title="Senha:"
                  onChangeText={setValuePassword}
              /> 
              <InputCustom
                  title="Confirmar senha:"
                  onChangeText={setValueConfirmPassword}
              /> 
          </View> 
      </ScrollView>
      <ButtonCustom
          onPress={() =>{}}
          title="Cadastrar"
           styleContainer={{
            position: "absolute",
            bottom: 36
           }}
        />
      </View>

    )
}