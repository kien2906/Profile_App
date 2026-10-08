import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import InterestsScreen from "../screens/InterestsScreen";
import EditProfile from "../screens/EditProfile";
import SettingsScreen from "../screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Theme } from "../Context/ThemeContext";
import { useContext, useState } from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function TabBottom({ profile, setProfile }) {
  const { theme } = useContext(Theme);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme ? "#1F2937" : "#FFFFFF",
        },
        tabBarActiveTintColor: theme ? "#FFFFFF" : "#2563EB",
      }}
    >
      <Tab.Screen name="Home">
        {(screenProps) => (
          <StackNavigator
            {...screenProps}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Interests" component={InterestsScreen} />
      <Tab.Screen name="Profile">
        {(screenProps) => (
          <ProfileNavigator
            {...screenProps}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
export default function DrawerNavigator() {
  const { theme } = useContext(Theme);
  const [profile, setProfile] = useState({
    image: null,
    name: "Kien Trinh",
    bio: "Frontend Developer",
    email: "kien.trinh@student.edu.vn",
    location: "Da Nang, Vietnam",
    occupation: "Student",
  });
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: theme ? "#1F2937" : "#FFFFFF",
          },
          headerStyle: {
            backgroundColor: theme ? "#1F2937" : "#FFFFFF",
          },
          drawerActiveTintColor: theme ? "#FFFFFF" : "#2563EB",
          drawerInactiveTintColor: theme ? "#9CA3AF" : "#374151",
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        >
          {(screenProps) => (
            <TabBottom
              {...screenProps}
              profile={profile}
              setProfile={setProfile}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen
          name="Setting"
          component={SettingsScreen}
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ProfileNavigator({ profile, setProfile }) {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileHome">
        {(screenProps) => (
          <Profile {...screenProps} profile={profile} setProfile={setProfile} />
        )}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="EditProfile">
        {(screenProps) => (
          <EditProfile
            {...screenProps}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

export function StackNavigator({ profile, setProfile }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {(screenProps) => <HomeScreen {...screenProps} profile={profile} />}
      </Stack.Screen>
      <Stack.Screen
        name="InterestsScreen"
       component={InterestsScreen}   
      />
      
      
      <Stack.Screen name="Setting">
        {() => <SettingsScreen profile={profile} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
