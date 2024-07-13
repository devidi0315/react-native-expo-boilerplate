
import {
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApp } from './firebaseConfig';

const auth = initializeAuth(getApp(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const signInGoogle = async (idToken: string) => {
  try {
    const credential = await signInWithCredential(auth, GoogleAuthProvider.credential(idToken));
    return credential;
  } catch (error) {
    throw error
  }
}