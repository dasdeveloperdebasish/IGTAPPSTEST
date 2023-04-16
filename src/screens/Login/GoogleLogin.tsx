import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

export default function GoogleLogin() {
  const {navigate} = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '757460086293-7jhks4vkiffdovhq81896r2emo6a34ev.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential);
    navigate('DrawerNavigator' as never);
  }

  return (
    <GoogleSigninButton onPress={onGoogleButtonPress} style={styles.btn} />
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
  },
});
