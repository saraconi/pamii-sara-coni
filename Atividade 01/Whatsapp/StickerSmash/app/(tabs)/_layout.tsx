import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b141a",
          borderTopWidth: 0,
          height: 65,
        },
        tabBarActiveTintColor: "#25D366",
        tabBarInactiveTintColor: "#8696a0",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      {/* Conversas */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Conversas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
          tabBarBadge: 13,
          tabBarBadgeStyle: {
            backgroundColor: "#25D366",
            color: "#000",
          },
        }}
      />

      {/* Atualizações */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Atualizações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sync-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Comunidades */}
      <Tabs.Screen
        name="comunidades"
        options={{
          title: "Comunidades",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Ligações */}
      <Tabs.Screen
        name="ligacoes"
        options={{
          title: "Ligações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
          tabBarBadge: 15,
          tabBarBadgeStyle: {
            backgroundColor: "#25D366",
            color: "#000",
          },
        }}
      />
    </Tabs>
  );
}