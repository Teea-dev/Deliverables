import { Image } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home" ,

          tabBarIcon: () => (
            <Image
              source={require("../assets/home-2.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
        // component={require("./index").default}
      />
      <Tabs.Screen name="discover" options={{ title: "Discover",
          tabBarIcon: () => (
            <Image
              source={require("../assets/discover.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
       }} />

      <Tabs.Screen
        name="dirvethru"
        options={{
          title: "Drive Thru",
          tabBarIcon: () => (
            <Image
              source={require("../assets/car.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: () => (
            <Image
              source={require("../assets/receipt.webp")}
              style={{ width: 24, height: 24 }}
            />
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
        // component={require("./profile").default}
      />
    </Tabs>
  );
}
