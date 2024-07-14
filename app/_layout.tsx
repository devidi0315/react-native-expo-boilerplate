import { useInit } from '@/ui/hook/useInit';
import { AppThemeProvider } from '@/ui/theme/ThemeProvider';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { loaded } = useInit();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="auth/login" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
