import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"
import { Alert } from "react-native"


export const storageToken = async (token: string) => {
    try {
        await AsyncStorage.setItem("storeToken", token)
    } catch(error) {
        Alert.alert("Tente Novamente", "Houve um erro interno")
    }
}

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem("storeToken")
        return value
    } catch (error) {
        Alert.alert("Tente Novamente", "Houve um erro interno")
        router.replace("/(app)")
    }
}
