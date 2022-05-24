import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles/LoginStyles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Vista del login</Text>
      <StatusBar style="auto" />
    </View>
  );
}
