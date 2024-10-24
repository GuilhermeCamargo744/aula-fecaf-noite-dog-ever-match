import { LoginScreen } from "@/src/screens/auth/login";
import { HomeScreen } from "@/src/screens/home";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTintColor: colors.WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerTitleAlign: "center",
        }}
      />
      <HomeScreen />
    </>
  );
}
