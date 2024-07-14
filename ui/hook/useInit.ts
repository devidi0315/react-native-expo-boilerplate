import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import "@/infra/firebase/firebaseConfig";

SplashScreen.preventAutoHideAsync();

export const useInit = () => {

  const [fontLoaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  return {
    loaded: fontLoaded,
  };
}