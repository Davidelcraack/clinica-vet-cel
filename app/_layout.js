import { Text, View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="items-center justify-center flex-1">
      <Slot />
    </View>
  );
}
