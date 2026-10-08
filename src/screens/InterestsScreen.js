import React, { useContext } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Theme } from "../Context/ThemeContext";
import { FontSize } from "../Context/FontSizeContext";
export const interestss = [
  {
    id: "1",
    name: "Coding",
    category: "Tech",
    favorite: false,
  },
  {
    id: "2",
    name: "Badminton",
    category: "Sports",
    favorite: false,
  },
];
export default function InterestsScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [interests, setInterests] = useState(interestss);
  const { theme } = useContext(Theme);
  const { fontSize } = useContext(FontSize);
  const sampleFontSize =
    fontSize === "Small" ? 14 : fontSize === "Large" ? 20 : 16;
  const colors = {
    background: theme ? "#111827" : "#FFFFFF",
    card: theme ? "#1F2937" : "#F3F4F6",
    text: theme ? "#FFFFFF" : "#111827",
  };
  const handleFavorite = (id) => {
    setInterests((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      ),
    );
  };

  const loc = interests.filter((p) =>
    category === "All" ? true : p.category === category,
  );
  const categories = [...new Set(interests.map((item) => item.category))];

  const handleAdd = () => {
    if (name.trim() === "" || category.trim() === "") {
      return;
    }
    const newId =
      interests.length === 0
        ? 1
        : Math.max(...interests.map((item) => Number(item.id))) + 1;
    const newAdd = {
      id: newId,
      name: name,
      category: category,
      favorite: false,
    };
    setInterests((pre) => [...pre, newAdd]);
    setName("");
    setCategory("");
    setShowForm(false);
  };
  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        { backgroundColor: colors.background },
      ]}
    >
      {/* Header */}

      {/* Page title and add button */}
      <View style={[styles.titleRow]}>
        <View style={styles.titleContent}>
          <Text
            style={[
              styles.pageTitle,
              { color: colors.text, fontSize: sampleFontSize },
            ]}
          >
            My Interests
          </Text>
          <Text style={[styles.subtitle, { fontSize: sampleFontSize }]}>
            Manage your academic and personal passions
          </Text>
          <Text style={[styles.trackedText, { fontSize: sampleFontSize }]}>
            (6 tracked)
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowForm(!showForm)}
        >
          <Ionicons name="add" size={28} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={21} color="#9CA3AF" />
        <TextInput
          style={[styles.searchInput, { fontSize: sampleFontSize }]}
          placeholder="Search interests..."
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Category filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              category === "All" && styles.activeFilterButton,
            ]}
            onPress={() => setCategory("All")}
          >
            <Text
              style={[
                styles.filterText,
                { fontSize: sampleFontSize },
                category === "All" && styles.activeFilterText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>

          {categories.map((itemCategory) => (
            <TouchableOpacity
              key={itemCategory}
              style={[
                styles.filterButton,
                category === itemCategory && styles.activeFilterButton,
              ]}
              onPress={() => setCategory(itemCategory)}
            >
              <Text
                style={[
                  styles.filterText,
                  { fontSize: sampleFontSize },
                  category === itemCategory && styles.activeFilterText,
                ]}
              >
                {itemCategory}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* Interest cards */}
      {loc.map((interest) => (
        <View
          style={[styles.interestCard, { backgroundColor: colors.background }]}
          key={interest.id}
        >
          <View style={styles.cardTopRow}>
            <View style={styles.interestIconBox}>
              <Ionicons name={interest.icon} size={24} color="#2563EB" />
            </View>

            <View style={styles.cardMainContent}>
              <View style={styles.nameRow}>
                <Text
                  style={[
                    styles.interestName,
                    { color: colors.text, fontSize: sampleFontSize },
                  ]}
                >
                  {interest.name}
                </Text>
                <View style={styles.categoryBadge}>
                  <Text
                    style={[styles.categoryText, { fontSize: sampleFontSize }]}
                  >
                    {interest.category}
                  </Text>
                </View>
              </View>
              <Text style={[styles.description, { fontSize: sampleFontSize }]}>
                {interest.description}
              </Text>
            </View>

            <View style={styles.cardActions}>
              <TouchableOpacity onPress={() => handleFavorite(interest.id)}>
                <Ionicons
                  name={interest.favorite ? "star" : "star-outline"}
                  size={20}
                  color={interest.favorite ? "orange" : "gray"}
                  style
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardBottomRow}>
            <View style={styles.selectedStatus}>
              <Ionicons
                name={interest.favorite ? "heart" : "checkmark-circle"}
                size={16}
                color={interest.favorite ? "#EF4444" : "#2563EB"}
              />
              <Text style={[styles.selectedText, { fontSize: sampleFontSize }]}>
                {interest.favorite ? "Favorite" : "Selected"}
              </Text>
            </View>
            <Text style={[styles.activityText, { fontSize: sampleFontSize }]}>
              {interest.status}
            </Text>
          </View>
        </View>
      ))}
      {showForm && (
        <View style={[styles.form]}>
          <Text style={[styles.formTitle, { fontSize: sampleFontSize }]}>
            Add Interest
          </Text>

          <TextInput
            style={[styles.input, { fontSize: sampleFontSize }]}
            placeholder="Interest name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={[styles.input, { fontSize: sampleFontSize }]}
            placeholder="Category"
            onChangeText={setCategory}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleAdd}>
            <Text style={[styles.saveText, { fontSize: sampleFontSize }]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  titleContent: {
    flexShrink: 1,
    marginRight: 12,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: "#6B7280",
  },
  trackedText: {
    marginTop: 2,
    fontSize: 13,
    color: "#6B7280",
  },
  addButton: {
    flexShrink: 0,
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBEAFE",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    height: 46,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
  },
  searchInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 14,
    color: "#111827",
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  categoryScroll: {
    flexGrow: 0,
    flexShrink: 0,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexShrink: 0,
  },

  activeFilterButton: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  filterText: {
    color: "#6B7280",
  },

  activeFilterText: {
    color: "#FFFFFF",
  },
  interestCard: {
    marginBottom: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  interestIconBox: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,

    backgroundColor: "#EFF6FF",
  },
  cardMainContent: {
    flex: 1,
    marginLeft: 11,
    marginRight: 7,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
  },
  interestName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  categoryBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: "#F3F4F6",
  },
  categoryText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#6B7280",
  },
  description: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 17,
    color: "#6B7280",
  },
  cardActions: {
    alignItems: "center",
    gap: 12,
  },
  cardBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  selectedStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  selectedText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6B7280",
  },
  activityText: {
    fontSize: 12,
    color: "#6B7280",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
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
    fontWeight: "700",
    color: "#2563EB",
  },
  form: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  formTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  saveButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
