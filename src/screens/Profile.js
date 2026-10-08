import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../Context/ThemeContext";
import { FontSize } from "../Context/FontSizeContext";

export default function Profile({ navigation, profile }) {
  const { theme } = useContext(Theme);
  const { fontSize } = useContext(FontSize);
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 22 : 16;
  const colors = {
    background: theme ? "#111827" : "#F8FAFC",
    card: theme ? "#1F2937" : "#FFFFFF",
    text: theme ? "#F9FAFB" : "#111827",
    mutedText: theme ? "#D1D5DB" : "#6B7280",
    divider: theme ? "#374151" : "#F3F4F6",
  };
  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        { backgroundColor: colors.background },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text
          style={[
            styles.headerTitle,
            { color: colors.text, fontSize: sampleFontSize },
          ]}
        >
          Profile
        </Text>
        <View style={styles.headerRight}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.text}
          />
          <Image
            source={
              profile.image
                ? { uri: profile.image }
                : require("../../assets/favicon.png")
            }
            style={styles.smallAvatar}
          />
        </View>
      </View>

      {/* Profile information */}
      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <Image
            source={
              profile.image
                ? { uri: profile.image }
                : require("../../assets/favicon.png")
            }
            style={styles.profileAvatar}
          />
          <View
            style={[styles.onlineDot, { borderColor: colors.background }]}
          />
        </View>
        <Text
          style={[
            styles.name,
            { color: colors.text, fontSize: sampleFontSize },
          ]}
        >
          {profile.name}
        </Text>
        <Text
          style={[
            styles.jobTitle,
            { color: colors.mutedText, fontSize: sampleFontSize },
          ]}
        >
          Frontend Developer & Mobile App Development Student
        </Text>
        <View style={styles.badge}>
          <Text style={[styles.badgeText, { fontSize: sampleFontSize }]}>
            University of Technology • Class of 2026
          </Text>
        </View>
      </View>

      {/* Edit profile button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          navigation.navigate("EditProfile", {
            profile: profile,
          })
        }
      >
        <Ionicons name="create-outline" size={20} color="#FFFFFF" />
        <Text style={[styles.editButtonText, { fontSize: sampleFontSize }]}>
          Edit Profile
        </Text>
      </TouchableOpacity>

      {/* Profile statistics */}
      <View style={[styles.statistics, { backgroundColor: colors.card }]}>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statNumber,
              { color: colors.text, fontSize: sampleFontSize },
            ]}
          >
            6
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colors.mutedText, fontSize: sampleFontSize },
            ]}
          >
            Interests
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statNumber,
              { color: colors.text, fontSize: sampleFontSize },
            ]}
          >
            12
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colors.mutedText, fontSize: sampleFontSize },
            ]}
          >
            Repositories
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statNumber,
              { color: colors.text, fontSize: sampleFontSize },
            ]}
          >
            4
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colors.mutedText, fontSize: sampleFontSize },
            ]}
          >
            Active Courses
          </Text>
        </View>
      </View>

      {/* Personal information */}
      <View style={styles.sectionHeader}>
        <Text
          style={[
            styles.sectionTitle,
            { color: colors.text, fontSize: sampleFontSize },
          ]}
        >
          PERSONAL INFORMATION
        </Text>
        <Text style={[styles.verifiedText, { fontSize: sampleFontSize }]}>
          Verified Student
        </Text>
      </View>

      <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
        <View style={[styles.infoRow, { borderBottomColor: colors.divider }]}>
          <Ionicons name="mail-outline" size={22} color="#2563EB" />
          <View style={styles.infoText}>
            <Text
              style={[
                styles.infoLabel,
                { color: colors.mutedText, fontSize: sampleFontSize },
              ]}
            >
              Email
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colors.text, fontSize: sampleFontSize },
              ]}
            >
              {profile.email}
            </Text>
          </View>
        </View>

        <View style={[styles.infoRow, { borderBottomColor: colors.divider }]}>
          <Ionicons name="location-outline" size={22} color="#2563EB" />
          <View style={styles.infoText}>
            <Text
              style={[
                styles.infoLabel,
                { color: colors.mutedText, fontSize: sampleFontSize },
              ]}
            >
              Location
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colors.text, fontSize: sampleFontSize },
              ]}
            >
              {profile.location}
            </Text>
          </View>
        </View>

        <View style={[styles.infoRow, { borderBottomColor: colors.divider }]}>
          <Ionicons name="briefcase-outline" size={22} color="#2563EB" />
          <View style={styles.infoText}>
            <Text
              style={[
                styles.infoLabel,
                { color: colors.mutedText, fontSize: sampleFontSize },
              ]}
            >
              Occupation
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colors.text, fontSize: sampleFontSize },
              ]}
            >
              {profile.occupation}
            </Text>
          </View>
        </View>

        <View style={[styles.infoRow, { borderBottomColor: colors.divider }]}>
          <Ionicons name="id-card-outline" size={22} color="#2563EB" />
          <View style={styles.infoText}>
            <Text
              style={[
                styles.infoLabel,
                { color: colors.mutedText, fontSize: sampleFontSize },
              ]}
            >
              Student ID
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colors.text, fontSize: sampleFontSize },
              ]}
            >
              SE170248
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  smallAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  profileSection: {
    alignItems: "center",
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: 12,
  },
  profileAvatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  onlineDot: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#2563EB",
    borderWidth: 3,
    borderColor: "#F8FAFC",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  jobTitle: {
    maxWidth: 320,
    marginTop: 6,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    color: "#6B7280",
  },
  badge: {
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
  },
  badgeText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },
  editButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingVertical: 13,
    borderRadius: 11,
    backgroundColor: "#2563EB",
    gap: 8,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  statistics: {
    flexDirection: "row",
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#6B7280",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
  verifiedText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },
  infoCard: {
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    elevation: 2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 14,
    color: "#111827",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    elevation: 2,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    marginTop: 4,
    fontSize: 11,
    color: "#9CA3AF",
  },
  activeTabText: {
    marginTop: 4,
    fontSize: 11,
    color: "#2563EB",
    fontWeight: "700",
  },
});
