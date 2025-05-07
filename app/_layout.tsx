import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      // header bg color
      headerStyle:{
        backgroundColor: "#f4511e"
      },
      // header text color
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
