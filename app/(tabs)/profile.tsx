import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, FontSizes, Spacing } from "../../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false }); // Hide default header
  }, [navigation]);

  const handleLogout = () => {
    router.push("/(auth)/welcome");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Section - User Name and Profile Picture */}
      <View style={[styles.topSection, { paddingTop: insets.top + 20 }]}>
        <Text style={styles.userName}>Joshua Smith</Text>
        <TouchableOpacity style={styles.profilePicture}>
          <Ionicons name="person" size={40} color="#9ca3af" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={18} color="#555" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search settings..."
            style={styles.searchInput}
            placeholderTextColor="#777"
          />
        </View>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoRow}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Email</Text>
            <Text style={styles.userInfoValue}>joshua.smith@email.com</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Phone</Text>
            <Text style={styles.userInfoValue}>+1 (555) 123-4567</Text>
          </View>
        </View>
        <View style={styles.userInfoRow}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Location</Text>
            <Text style={styles.userInfoValue}>New York, NY</Text>
          </View>
          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="create-outline" size={16} color="#3b82f6" />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Feature Cards */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons name="heart" size={24} color="#10b981" />
          </View>
          <Text style={styles.cardText}>Favourites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons name="wallet" size={24} color="#f59e0b" />
          </View>
          <Text style={styles.cardText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons name="bag" size={24} color="#3b82f6" />
          </View>
          <Text style={styles.cardText}>Orders</Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings Options */}
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#3b82f615" }]}>
              <Ionicons name="time-outline" size={20} color="#3b82f6" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Order History</Text>
              <Text style={styles.settingDescription}>View all your transactions</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#10b98115" }]}>
              <Ionicons name="people-outline" size={20} color="#10b981" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Referrals</Text>
              <Text style={styles.settingDescription}>Invite friends & earn amazing rewards</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#8b5cf615" }]}>
              <Ionicons name="notifications-outline" size={20} color="#8b5cf6" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Notifications</Text>
              <Text style={styles.settingDescription}>Manage your notifications</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#3b82f615" }]}>
              <Ionicons name="language-outline" size={20} color="#3b82f6" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Language</Text>
              <Text style={styles.settingDescription}>Change app language</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#06b6d415" }]}>
              <Ionicons name="card-outline" size={20} color="#06b6d4" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Payment Methods</Text>
              <Text style={styles.settingDescription}>Manage cards and bank accounts</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#f59e0b15" }]}>
              <Ionicons name="help-circle-outline" size={20} color="#f59e0b" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Help Center</Text>
              <Text style={styles.settingDescription}>Get help and find answers</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIconContainer, { backgroundColor: "#6b728015" }]}>
              <Ionicons name="settings-outline" size={20} color="#6b7280" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Settings</Text>
              <Text style={styles.settingDescription}>App preferences and privacy</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>
      </View>

      {/* App Information */}
      <View style={styles.appInfoContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} />
        </View>
        <Text style={styles.appVersion}>Discount Mithra v2.1.0</Text>
        <View style={styles.legalLinks}>
          <TouchableOpacity>
            <Text style={styles.legalLink}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>•</Text>
          <TouchableOpacity>
            <Text style={styles.legalLink}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#dc2626" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
    backgroundColor: "#fff",
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  userInfoContainer: {
    backgroundColor: "#fff",
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    borderRadius: 12,
    padding: Spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.sm,
  },
  userInfoItem: {
    flex: 1,
    marginRight: Spacing.md,
  },
  userInfoLabel: {
    fontSize: 12,
    color: Colors.secondary,
    marginBottom: 2,
  },
  userInfoValue: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: Colors.primary,
  },
  editProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eff6ff",
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3b82f6",
  },
  editProfileText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3b82f6",
    marginLeft: 4,
  },
  settingsContainer: {
    backgroundColor: "#fff",
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: Colors.secondary,
  },
  appInfoContainer: {
    alignItems: "center",
    paddingVertical: Spacing.xl,
    backgroundColor: "#fff",
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  logoContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  appVersion: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },
  legalLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  legalLink: {
    fontSize: FontSizes.subtitle,
    color: Colors.primary,
    fontWeight: "500",
  },
  separator: {
    fontSize: FontSizes.subtitle,
    color: Colors.secondary,
    marginHorizontal: Spacing.sm,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderColor: "#dc2626",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  logoutText: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: "#dc2626",
    marginLeft: Spacing.sm,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  card: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: Spacing.md,
    alignItems: "center",
    marginHorizontal: Spacing.xs,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.sm,
  },
  cardText: {
    fontSize: FontSizes.subtitle,
    fontWeight: "600",
    color: Colors.primary,
    textAlign: "center",
  },
});
