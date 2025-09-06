import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Spacing, FontSizes } from "../../theme";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  color?: string;
  onPress?: () => void;
};

export default function CategoryCard({ icon, title, color = "#4A90E2", onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={40} color={color} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: Spacing.sm,
    paddingVertical: Spacing.lg,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

    // Elevation for Android
    elevation: 2,
  },
  iconWrapper: {
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSizes.subtitle,
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
  },
});
