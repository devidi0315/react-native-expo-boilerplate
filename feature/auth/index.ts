
import * as FBAuth from '@/infra/firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export class Auth {


  static async signInGoogle() {

    const provider = new GoogleAuthProvider();

    const user = await FBAuth.signInGoogle();

    // await GoogleSignin.hasPlayServices();
    // const userInfo = await GoogleSignin.signIn();

    // if (!userInfo.idToken) {
    //   throw new Error('idToken is not found');
    // }

    // const user = await FBAuth.signInGoogle(userInfo.idToken);
    // console.log(user);
    // return user;
  }
}