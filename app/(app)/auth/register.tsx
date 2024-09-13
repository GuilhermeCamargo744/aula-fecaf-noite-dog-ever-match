
import { RegisterScreen } from "@/src/screens/auth/register";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";


export default function Register () {
    return( 
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Cadastrar",
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY
                    },
                    headerTitleAlign: "center"
                }}
            />
            <RegisterScreen/>
        </>
    )
}