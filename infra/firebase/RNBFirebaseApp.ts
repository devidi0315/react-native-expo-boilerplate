import { FirebaseApp, FirebaseOptions } from "firebase/app";
import { Auth } from "firebase/auth";
import { getApp, getAuth, getFirebaseConfig } from "./firebaseConfig";

export class RNBFirebaseApp {
  app: FirebaseApp;
  auth: Auth;
  constructor(config: FirebaseOptions) {
    console.log(config);
    this.app = getApp(config);
    this.auth = getAuth(this.app);
  }

  static prefix(config: string = "EXPO_PUBLIC_FIREBASE") {
    return new RNBFirebaseApp(getFirebaseConfig(config));
  }
}