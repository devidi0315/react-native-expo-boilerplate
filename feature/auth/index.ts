
import * as FBAuth from '@/infra/firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export class Auth {


  static async signInGoogle() {

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (!userInfo.idToken) {
      throw new Error('idToken is not found');
    }

    const user = await FBAuth.signInGoogle(userInfo.idToken);
    console.log(user);
    return user;
  }
}