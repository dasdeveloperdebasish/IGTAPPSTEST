import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, moderateScale, verticalScale} from '@utils/metric';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FacebookLogin() {
  const {navigate} = useNavigation();

  async function signIn() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      auth().signInWithCredential(facebookCredential);
      navigate('DrawerNavigator' as never);
    } catch (error) {
      // alert(error);
      console.log(error);
    }
  }

  return (
    <TouchableOpacity style={styles.loginButton} onPress={signIn}>
      <View style={styles.facebookIcon}>
        <FontAwesome name="facebook" size={moderateScale(15)} />
      </View>
      <Text style={styles.buttonText}>Facebook Sign In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#4267B2',
    color: '#fff',
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(45),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  facebookIcon: {
    backgroundColor: '#fff',
    width: horizontalScale(20),
    height: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(10),
  },
});
