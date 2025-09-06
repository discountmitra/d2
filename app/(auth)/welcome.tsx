import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Discount Mithra</Text>
      <Text style={styles.subtitle}>
        Discover offers on food, travel, healthcare & more
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.primaryText}>Login</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => router.push("/(auth)/signup")}
      >
        <Text style={styles.secondaryText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#fff" },
  logo: { width: 160, height: 160, marginBottom: 24 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 32, textAlign: "center" },
  primaryButton: { backgroundColor: "#111827", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12, marginBottom: 12 },
  primaryText: { color: "white", fontWeight: "600" },
  secondaryButton: { borderWidth: 1, borderColor: "#111827", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 },
  secondaryText: { color: "#111827", fontWeight: "600" },
});
