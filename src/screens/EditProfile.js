import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontSize } from "../Context/FontSizeContext";
import { Theme } from "../Context/ThemeContext";
import * as ImagePicker from "expo-image-picker";
export default function EditProfile({ navigation, profile, setProfile }) {
  const { theme } = useContext(Theme);
  const { fontSize } = useContext(FontSize);
  const [image, setImage] = useState(profile.image);
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [email, setEmail] = useState(profile.email);
  const [location, setLocation] = useState(profile.location);
  const [occupation, setOccupation] = useState(profile.occupation);

  const colors = {
    background: theme ? "#111827" : "#F8FAFC",
    input: theme ? "#374151" : "#FFFFFF",
    readOnlyInput: theme ? "#374151" : "#F3F4F6",
    text: theme ? "#F9FAFB" : "#111827",
    mutedText: theme ? "#D1D5DB" : "#6B7280",
    label: theme ? "#E5E7EB" : "#374151",
    border: theme ? "#4B5563" : "#D1D5DB",
    readOnlyBorder: theme ? "#4B5563" : "#E5E7EB",
  };
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 22 : 16;

  const handleSave = () => {
    if (name.trim() === "") {
      Alert.alert("Error", "Name is required");
      return;
    }

  
    setProfile({
      ...profile,
      name,
      bio,
      email,
      location,
      occupation,
      image,
    });
    navigation.navigate("ProfileHome");
  };

  const inputStyle = [
    styles.input,
    {
      backgroundColor: colors.input,
      borderColor: colors.border,
      color: colors.text,
      fontSize: sampleFontSize,
    },
  ];

  const handleEditImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text
            style={[
              styles.headerTitle,
              { color: colors.text, fontSize: sampleFontSize },
            ]}
          >
            Edit Profile
          </Text>
          <View style={styles.headerSpace} />
        </View>

        <View style={styles.photoSection}>
          <View style={styles.photoWrapper}>
            <Image
              source={image ? { uri: image } : require("../../assets/icon.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity
              onPress={handleEditImage}
              style={[styles.cameraButton, { borderColor: colors.background }]}
            >
              <Ionicons name="camera" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleEditImage}>
            <Text style={[styles.changePhoto, { fontSize: sampleFontSize }]}>
              Change Photo
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Full Name
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={inputStyle}
          placeholder="Enter your full name"
          placeholderTextColor={colors.mutedText}
        />
        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Bio
        </Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          style={[...inputStyle, styles.bioInput]}
          multiline
          placeholder="Tell us about yourself"
          placeholderTextColor={colors.mutedText}
        />
        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={inputStyle}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
          placeholderTextColor={colors.mutedText}
        />
        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Location
        </Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          style={inputStyle}
          placeholder="Enter your location"
          placeholderTextColor={colors.mutedText}
        />
        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Occupation
        </Text>
        <TextInput
          value={occupation}
          onChangeText={setOccupation}
          style={inputStyle}
          placeholder="Enter your occupation"
          placeholderTextColor={colors.mutedText}
        />
        <Text
          style={[
            styles.label,
            { color: colors.label, fontSize: sampleFontSize },
          ]}
        >
          Student ID
        </Text>
        <View
          style={[
            styles.readOnlyInput,
            {
              backgroundColor: colors.readOnlyInput,
              borderColor: colors.readOnlyBorder,
            },
          ]}
        >
          <Text
            style={[
              styles.readOnlyText,
              { color: colors.mutedText, fontSize: sampleFontSize },
            ]}
          >
            SE170248
          </Text>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color={colors.mutedText}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.cancelButton,
              { backgroundColor: colors.input, borderColor: colors.border },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[
                styles.cancelButtonText,
                { color: colors.label, fontSize: sampleFontSize },
              ]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={[styles.saveButtonText, { fontSize: sampleFontSize }]}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  headerSpace: {
    width: 40,
  },
  photoSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  photoWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    borderWidth: 3,
    borderColor: "#F8FAFC",
  },
  changePhoto: {
    marginTop: 10,
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },
  label: {
    marginBottom: 7,
    color: "#374151",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    color: "#111827",
    fontSize: 15,
  },
  bioInput: {
    height: 84,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  readOnlyInput: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
  },
  readOnlyText: {
    color: "#6B7280",
    fontSize: 15,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  cancelButtonText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "600",
  },
  saveButton: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#2563EB",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
