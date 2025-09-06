import { ScrollView, StyleSheet } from "react-native";
import Header from "@/components/home/Header";
import OfferBanner from "../../components/home/OfferBanner";
import DealCard from "../../components/home/DealCard";
import CategoryPreview from "../../components/home/CategoryPreview";
import ActivityCard from "../../components/home/ActivityCard";
import { Spacing, Colors } from "../../theme";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Greeting + Search */}
      <Header />

      {/* Offer Banner */}
      <OfferBanner />

      {/* Hot Deal (static for now) */}
      <DealCard />

      {/* Categories Preview (only 4 shown here) */}
      <CategoryPreview />

      {/* Recent Activity */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.md,
  },
});
