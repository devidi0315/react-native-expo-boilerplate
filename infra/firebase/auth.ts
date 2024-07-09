
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import { app } from './firebaseConfig';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const auth = getAuth(app);


export const signInGoogle = async (idToken: string) => {
  try {
    const credential = await signInWithCredential(auth, GoogleAuthProvider.credential(idToken));
    return credential;
  } catch (error) {
    throw error
  }
}