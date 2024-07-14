
import { initializeApp, getApp as getFirebaseApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


export function getFirebaseConfig(prefix: string) {
  return {
    apiKey: process.env[`${prefix}_API_KEY`],
    authDomain: process.env[`${prefix}_AUTH_DOMAIN`],
    projectId: process.env[`${prefix}_PROJECT_ID`],
    storageBucket: process.env[`${prefix}_STORAGE_BUCKET`],
    messagingSenderId: process.env[`${prefix}_MESSAGING_SENDER_ID`],
    appId: process.env[`${prefix}_APP_ID`],
    measurementId: process.env[`${prefix}_MEASUREMENT_ID`]
  }
}

export const getApp = (firebaseConfig: FirebaseOptions) => {
  try {
    return getFirebaseApp("app")
  } catch (error) {
    console.log('init error', error);
  }
  return initializeApp(firebaseConfig, "app");
} 

export const getAuth = (app: FirebaseApp) => {
  return initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}
