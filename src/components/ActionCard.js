import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../Context/ThemeContext";
import { FontSize } from "../Context/FontSizeContext";
import { useContext } from "react";

const ActionCard = ({ icon, title, description, nameNagvigator }) => {
  const nagvigator = useNavigation();
  const { theme } = useContext(Theme);
  const { fontSize } = useContext(FontSize);
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 24 : 16;
  const colors = {
    background: theme ? "#111827" : "#FFFFFF",
    card: theme ? "#1F2937" : "#F3F4F6",
    text: theme ? "#FFFFFF" : "#111827",
  };
  return (
    <TouchableOpacity
    
      style={[styles.actionCard,{backgroundColor : colors.card}]}
      onPress={() => nagvigator.navigate(nameNagvigator)}
    >
      <View style={styles.actionIconContainer}>
        <Ionicons name={icon} size={24} color="#2563EB" />
      </View>
      <View style={styles.actionTextContainer}>
        <Text style={[styles.actionTitle, { color: colors.text, fontSize: sampleFontSize }]}>{title}</Text>
        <Text style={[styles.actionDescription, { color: colors.text, fontSize: sampleFontSize }]}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#64748B" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ActionCard;
