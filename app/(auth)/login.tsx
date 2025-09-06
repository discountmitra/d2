import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Colors, FontSizes, Spacing } from "../../theme";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.primaryText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.lg, justifyContent: "center", backgroundColor: Colors.background },
  title: { fontSize: FontSizes.title, fontWeight: "700", marginBottom: Spacing.lg, textAlign: "center", color: Colors.primary },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: Spacing.sm,
    marginBottom: Spacing.md,
    fontSize: FontSizes.input,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm + 2,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryText: { color: "white", fontWeight: "600", fontSize: FontSizes.button },
});
