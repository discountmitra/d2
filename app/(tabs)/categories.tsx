import { View, FlatList, StyleSheet } from "react-native";
import CategoryCard from "@/components/home/CategoryCard";
import { Spacing } from "@/theme";

const categories = [
  { id: "1", title: "Food", subtitle: "Restaurants & Takeaway", icon: "fast-food", color: "#FF6B6B" },
  { id: "2", title: "Healthcare", subtitle: "Hospitals & Clinics", icon: "medkit", color: "#4ECDC4" },
  { id: "3", title: "Travel", subtitle: "Hotels & Booking", icon: "airplane", color: "#45B7D1" },
  { id: "4", title: "Home Services", subtitle: "Repair & Maintenance", icon: "build", color: "#FFA502" },
  { id: "5", title: "Automobiles", subtitle: "Car & Bike Services", icon: "car-sport", color: "#3742FA" },
  { id: "6", title: "Beauty & Salon", subtitle: "Hair & Beauty Care", icon: "color-palette", color: "#B53471" },
  { id: "7", title: "Bar", subtitle: "Drinks & Nightlife", icon: "wine", color: "#8E44AD" },
  { id: "8", title: "Events", subtitle: "Event Management", icon: "calendar", color: "#27AE60" },
  { id: "9", title: "Financial Services", subtitle: "Banking & Insurance", icon: "cash", color: "#16A085" },
  { id: "10", title: "Education", subtitle: "Schools & Coaching", icon: "school", color: "#E67E22" },
  { id: "11", title: "Electronics", subtitle: "Tech & Gadgets", icon: "phone-portrait", color: "#2C3E50" },
  { id: "12", title: "Clothing", subtitle: "Fashion & Style", icon: "shirt", color: "#C0392B" },
];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            icon={item.icon as any}
            title={item.title}
            subtitle={item.subtitle}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: Spacing.md,
  },
});
