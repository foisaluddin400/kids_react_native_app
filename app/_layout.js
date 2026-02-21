import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";



export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />

        <Stack.Screen name="change-password" />
        <Stack.Screen name="terms" />
        <Stack.Screen name="privacy" />
      </Stack>
    </Provider>
  );
}
