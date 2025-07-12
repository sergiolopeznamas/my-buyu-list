import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top, marginBottom: insets.bottom }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
