import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signInAsync } from 'expo-apple-authentication'

export class AuthService {
  auth: InfraAuthService
  constructor(auth: InfraAuthService) {
    this.auth = auth;
  }

  async signInGoogle() {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
  
    if (!userInfo.idToken) {
      throw new Error('idToken is not found');
    }
  
    const user = await this.auth.signInGoogle(userInfo.idToken);
    return user;
  }
  
  async signInApple() {
    const credential = await signInAsync()
  }

}
