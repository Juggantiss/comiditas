import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles/HomeStyles";

import { text } from "../utils/Constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Vista del home {text.Welcome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
