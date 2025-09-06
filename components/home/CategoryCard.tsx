import { View, Text, StyleSheet } from "react-native";
import { Colors, FontSizes, Spacing } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  color: string;
};

export default function CategoryCard({ icon, title, subtitle, color }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Ionicons name={icon} size={28} color="#fff" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: Spacing.sm,
    borderRadius: 12,
    padding: Spacing.md,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 120,
  },
  icon: {
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSizes.input,
    color: "#f0f0f0",
    textAlign: "center",
  },
});
