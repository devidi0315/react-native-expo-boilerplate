interface RNBUser {
  uid: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface InfraAuthService {
  signInGoogle(idToken: string): Promise<RNBUser>;
}