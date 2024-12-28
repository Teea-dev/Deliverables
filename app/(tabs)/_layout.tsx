import { Redirect, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  CarIcon,
  ReceiptIcon,
  HomeIcon,
  DiscoverIcon,
} from "../../assets/icons";
import { View, Text } from "react-native";
import { useUserStore } from "@/store/userStore";

interface CustomTabLabelProps {
  children: string;
  focused: boolean;
  color: string;
}
const CustomTabLabel: React.FC<CustomTabLabelProps> = ({
  children,
  focused,
  color,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>{children}</Text>

      {focused && (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "black",
            marginBottom: 2,
          }}
        />
      )}
    </View>
  );
};

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
  if (hasFinishedOnboarding) {
    return <Redirect href="/auth" />;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: (props) => <CustomTabLabel {...props} />,
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarLabel: (props) => <CustomTabLabel {...props} />,

          tabBarIcon: ({ color, size }) => (
            <DiscoverIcon color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="dirvethru"
        options={{
          title: "Drivethru",
          tabBarLabel: (props) => <CustomTabLabel {...props} />,

          tabBarIcon: ({ color, size }) => <CarIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarLabel: (props) => <CustomTabLabel {...props} />,

          tabBarIcon: ({ color, size }) => (
            <ReceiptIcon color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: (props) => <CustomTabLabel {...props} />,

          tabBarIcon: () => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
