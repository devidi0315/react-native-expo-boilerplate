import { useInit } from '@/ui/hook/useInit';
import { AppThemeProvider } from '@/ui/theme/ThemeProvider';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import 'react-native-reanimated';

export default function RootLayout() {
  const { loaded } = useInit();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="_dev" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
