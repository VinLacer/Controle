import { useState, useEffect } from 'react';
import {GoogleSignin, GoogleSigninButton} from "@react-native-google-signin/google-signin";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Authentication({setUserInfo}) {
  const [error, setError] = useState();   
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: "939688122870-3861b7shd8aea5p8l4h1dfjag0h68us3.apps.googleusercontent.com",
      androidClientId: "939688122870-4brpl5kfue4mbln18nkcfmrr3jaoldcd.apps.googleusercontent.com"
    })
  };

  const SaveUserInfo = async (info) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(info));     
    } catch (error) {
      console.log("Failed to Set User Info", error);
    }
  }

  useEffect(() => {
    configureGoogleSignIn();
  },[]);

  const signIn = async() => {
    promptAsync();
    console.log("Signing in.....");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      SaveUserInfo(userInfo);
      setUserInfo(JSON.stringify(userInfo));
      console.log(userInfo);
    } catch (e) {
      setError(e)
      console.log(error);
    }

  };

 return(
        <GoogleSigninButton size={GoogleSigninButton.Size.Standard}
                      color={GoogleSigninButton.Color.Dark}
                      onPress={signIn}/>
 );

}