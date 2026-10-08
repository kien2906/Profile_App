import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../Context/ThemeContext";
import { FontSize } from "../Context/FontSizeContext";

export default function SettingsScreen() {
  // Store the selected appearance and font size.
  const { theme, handleTheme } = useContext(Theme);
  const { fontSize, changeFontSize } = useContext(FontSize);

  const backgroundColor = theme ? "#111827" : "#F3F4F6";
  const cardColor = theme ? "#1F2937" : "#FFFFFF";
  const textColor = theme ? "#F9FAFB" : "#111827";
  const mutedTextColor = theme ? "#D1D5DB" : "#6B7280";

  // Choose the font size for the sample text.
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 22 : 16;

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor }]}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <Text
        style={[
          styles.headerTitle,
          { color: textColor, fontSize: sampleFontSize },
        ]}
      >
        Settings
      </Text>

      {/* Appearance settings */}
      <Text
        style={[
          styles.sectionTitle,
          { color: mutedTextColor, fontSize: sampleFontSize },
        ]}
      >
        APPEARANCE
      </Text>
      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <View style={styles.darkModeRow}>
          <View style={styles.darkModeLabel}>
            <Ionicons name="moon-outline" size={22} color="#2563EB" />
            <Text
              style={[
                styles.settingText,
                { color: textColor, fontSize: sampleFontSize },
              ]}
            >
              Dark Mode
            </Text>
          </View>
          <Switch
            value={theme}
            onValueChange={handleTheme}
            trackColor={{ false: "#D1D5DB", true: "#93C5FD" }}
            thumbColor={theme ? "#2563EB" : "#F9FAFB"}
          />
        </View>

        <View style={styles.fontSection}>
          <Text
            style={[
              styles.settingText,
              { color: textColor, fontSize: sampleFontSize },
            ]}
          >
            Font Size
          </Text>
          <View style={styles.fontButtons}>
            <TouchableOpacity
              style={[
                styles.fontButton,
                fontSize === "Small" && styles.selectedFontButton,
              ]}
              onPress={() => changeFontSize("Small")}
            >
              <Text
                style={[
                  styles.fontButtonText,
                  { fontSize: sampleFontSize },
                  { color: fontSize === "Small" ? "#FFFFFF" : "#2563EB" },
                ]}
              >
                Small
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.fontButton,
                fontSize === "Medium" && styles.selectedFontButton,
              ]}
              onPress={() => changeFontSize("Medium")}
            >
              <Text
                style={[
                  styles.fontButtonText,
                  { fontSize: sampleFontSize },
                  { color: fontSize === "Medium" ? "#FFFFFF" : "#2563EB" },
                ]}
              >
                Medium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.fontButton,
                fontSize === "Large" && styles.selectedFontButton,
              ]}
              onPress={() => changeFontSize("Large")}
            >
              <Text
                style={[
                  styles.fontButtonText,
                  { fontSize: sampleFontSize },
                  { color: fontSize === "Large" ? "#FFFFFF" : "#2563EB" },
                ]}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.sampleText,
              { color: mutedTextColor, fontSize: sampleFontSize },
            ]}
          >
            This is a sample text.
          </Text>
        </View>
      </View>

      {/* App information */}
      <Text
        style={[
          styles.sectionTitle,
          { color: mutedTextColor, fontSize: sampleFontSize },
        ]}
      >
        ABOUT
      </Text>
      <View
        style={[styles.card, styles.aboutCard, { backgroundColor: cardColor }]}
      >
        <Text
          style={[
            styles.settingText,
            { color: textColor, fontSize: sampleFontSize },
          ]}
        >
          About App
        </Text>
        <Text
          style={[
            styles.versionText,
            { color: mutedTextColor, fontSize: sampleFontSize },
          ]}
        >
          Version 1.0.0
        </Text>
      </View>

      {/* Log out */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => Alert.alert("Are you sure you want to log out?")}
      >
        <Text style={[styles.logoutButtonText, { fontSize: sampleFontSize }]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  headerTitle: {
    marginBottom: 28,
    fontSize: 28,
    fontWeight: "700",
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "600",
  },
  card: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  darkModeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D1D5DB",
  },
  darkModeLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  fontSection: {
    paddingTop: 14,
  },
  fontButtons: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  fontButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#2563EB",
    borderRadius: 8,
  },
  selectedFontButton: {
    backgroundColor: "#2563EB",
  },
  fontButtonText: {
    fontSize: 13,
    fontWeight: "600",
  },
  sampleText: {
    marginTop: 16,
  },
  aboutCard: {
    marginBottom: 32,
  },
  versionText: {
    marginTop: 6,
    fontSize: 14,
  },
  logoutButton: {
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#2563EB",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
