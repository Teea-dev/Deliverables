import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <AuthProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="onboardNext" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      {/* <Stack.Screen name="Login" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
