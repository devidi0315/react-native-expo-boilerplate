
import {
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import { RNBFirebaseApp } from './RNBFirebaseApp';
import { RNBUser } from '@/feature/auth/auth.dto';


export class RNBAuth implements InfraAuthService{
  app: RNBFirebaseApp
  constructor(app: RNBFirebaseApp) {
    this.app = app;
  }
  async signInGoogle(idToken: string): Promise<RNBUser> {
    try {
      const credential = await signInWithCredential(this.app.auth, GoogleAuthProvider.credential(idToken));
      return RNBUser.parse({
        uid: credential.user.uid,
        displayName: credential.user.displayName,
        email: credential.user.email,
        photoURL: credential.user
      });
    } catch (error) {
      throw error
    }
  }
}