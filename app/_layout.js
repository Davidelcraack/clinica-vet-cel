import { View } from "react-native";
import { Slot } from "expo-router";
import UserAuthProvider from "./context/UserAuthContext";

export default function Layout() {
  return (
    <UserAuthProvider>
    <View className="items-center justify-center flex-1">
      <Slot />
    </View>
    </UserAuthProvider>
  );
}
