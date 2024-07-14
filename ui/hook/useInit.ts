import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { getPretendard } from "../util/font";

SplashScreen.preventAutoHideAsync();

export const useInit = () => {

  const [fontLoaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    ...getPretendard()
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