
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from 'firebase/auth';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { app } from './firebaseConfig';

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const signInGoogle = async () => {
  try {
    // const credential = await signInWithCredential(auth, GoogleAuthProvider.credential(idToken));
    // const provider = new GoogleAuthProvider();

    // signInWithPopup(auth, provider)
    

    return true;
  } catch (error) {
    throw error
  }
}