import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer></NavigationContainer>
    </>
  );
}
