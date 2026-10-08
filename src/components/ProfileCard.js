import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../Context/ThemeContext";
import { FontSize } from "../Context/FontSizeContext";
import { useContext } from "react";

const ProfileCard = ({ profile }) => {
  console.log(profile)
   const {theme} =useContext(Theme);
   const {fontSize} = useContext(FontSize);
   const sampleFontSize =
     fontSize === "Small" ? 14 : fontSize === "Large" ? 24 : 16;
      const colors = {
  background: theme ? "#111827" : "#FFFFFF",
  card: theme ? "#1F2937" : "#F3F4F6",
  text: theme ? "#FFFFFF" : "#111827",
};
return (

      <View style={[styles.profileCard ,{backgroundColor : colors.card}]}>
    <View style={styles.profileInfo}>
      <Image
        source={profile?.image ? { uri: profile.image } : require("../../assets/favicon.png")}
        style={styles.profileAvatar}
      />
      <View style={styles.profileText}>
        <Text style={[styles.profileName, { color: colors.text, fontSize: sampleFontSize } ]}>{profile?.name}</Text>
        <Text style={[styles.profileBio, { color: colors.text, fontSize: sampleFontSize }]}>
          {profile?.bio}
        </Text>
      </View>
    </View>
    <TouchableOpacity style={styles.viewProfileButton}>
      <Text style={[styles.viewProfileButtonText, { fontSize: sampleFontSize }]}>View Profile</Text>
    </TouchableOpacity>
  </View>
)
};
export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#64748B",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    marginBottom: 32,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 6,
  },
  profileBio: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
  },

  viewProfileButton: {
    backgroundColor: "#EEF2FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  viewProfileButtonText: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
  },
});
