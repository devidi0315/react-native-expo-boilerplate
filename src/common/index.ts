import { AuthService } from "@/feature/auth/auth";
import { RNBFirebaseApp } from "@/infra/firebase/RNBFirebaseApp";
import { RNBAuth } from "@/infra/firebase/auth";

export const firebaseApp = RNBFirebaseApp.prefix();
export const authService = new AuthService(new RNBAuth(firebaseApp));