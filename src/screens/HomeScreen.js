import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { interestss } from "./InterestsScreen";
import ActionCard from "../components/ActionCard";
import ProfileCard from "../components/ProfileCard";
import { FontSize } from "../Context/FontSizeContext";
import { Theme } from "../Context/ThemeContext";
export default function HomeScreen({profile, navigation }) {


  console.log(profile)
  const { fontSize } = useContext(FontSize);
  const {theme} =useContext(Theme)
  console.log(theme)
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 22 : 16;
    const colors = {
  background: theme ? "#111827" : "#FFFFFF",
  card: theme ? "#1F2937" : "#F3F4F6",
  text: theme ? "#FFFFFF" : "#111827",
};

  return (
    <SafeAreaView style={[ styles.container,{backgroundColor : theme ? "#111827" : "#F3F4F6"}]}>
      <ScrollView contentContainerStyle={[styles.scrollContent ]}>
        {/* Header */}
        <View style={[styles.header]}>
          <View>
            <Text style={[styles.headerGreeting, { fontSize: sampleFontSize , color:  theme ? "#F9FAFB" : "#111827" }]}>
              Welcome Back!
            </Text>
            <Text style={[styles.headerName, { fontSize: sampleFontSize , color: theme ? "#fff" : "#000"}]}>
              Kien
            </Text>
          </View>
          <Image
            source={ profile.image ? {uri : profile.image} : require("../../assets/favicon.png")  }
            style={styles.headerAvatar}
          />
        </View>

        {/* Profile Card */}
        <ProfileCard profile={profile}/>

        {/* Interests Preview */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { fontSize: sampleFontSize ,color:  theme ? "#F9FAFB" : "#111827"  }]}>
            My Interests
          </Text>
          <TouchableOpacity>
            <Text style={[styles.viewAllText, { fontSize: sampleFontSize , color: colors.text }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.interestsContainer}>
          {interestss?.map((p) => (
            <View key={p.id} style={[styles.interestBadge ,{ backgroundColor: theme ? "#1F2937" : "#FFFFFF" }]}>
              <Text style={[styles.interestText, { color: theme ? "#F9FAFB" : "#111827", fontSize: sampleFontSize }]}>{p.name}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <Text
          style={[
            styles.sectionTitle,
            { marginTop: 32, marginBottom: 16, fontSize: sampleFontSize ,color : colors.text },
          ]}
        >
          Quick Actions
        </Text>

        <ActionCard
          icon="person-outline"
          title="My Profile"
          description="View full credentials & contact info"
          nameNagvigator="Profile"
        />
        <ActionCard
          icon="sparkles-outline"
          title="My Interests"
          description="Browse all selected hobbies"
          nameNagvigator="Interests"
        />
        <ActionCard
          icon="options-outline"
          title="Settings"
          description="Preferences, themes & alerts"
          nameNagvigator="Setting"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollContent: {
    padding: 24,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  headerGreeting: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 4,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  headerName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
  },
  headerAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  viewAllText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12, // For newer RN versions
  },
  interestBadge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#64748B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    marginRight: 10, // Fallback for gap
    marginBottom: 10, // Fallback for gap
    flexDirection: "row",
    alignItems: "center",
  },
  interestText: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "600",
  },
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: "#64748B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  actionIconContainer: {
    width: 52,
    height: 52,
    backgroundColor: "#EEF2FF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 13,
    color: "#64748B",
  },
});
