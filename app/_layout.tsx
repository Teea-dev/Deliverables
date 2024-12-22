import { Image } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CarIcon, ReceiptIcon, HomeIcon, DiscoverIcon } from "../assets/icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={24} />,
        }}
        // component={require("./index").default}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <DiscoverIcon color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="dirvethru"
        options={{
          title: "Drive Thru",
          tabBarIcon: ({ color, size }) => <CarIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <ReceiptIcon color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
