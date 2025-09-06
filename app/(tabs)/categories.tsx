import { View, Text, StyleSheet } from "react-native";
import { Colors, FontSizes, Spacing } from "../../theme";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Text style={styles.subtitle}>Browse services here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: Spacing.lg, backgroundColor: Colors.background },
  title: { fontSize: FontSizes.title, fontWeight: "700", marginBottom: Spacing.sm, color: Colors.primary },
  subtitle: { fontSize: FontSizes.subtitle, color: Colors.secondary },
});
